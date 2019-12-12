const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');
const bloglist = require('../models/blogschema');
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});
var fs = require("fs");

pgrtrs.get('/', function(request, response){
  response.render('index', {
    pginfo: pagesInfo.index
  })
})


pgrtrs.get('/login', function(request, response){
  response.render('adminlogin', {
    pginfo: pagesInfo.admin
  })
})
pgrtrs.post('/admin', async function(request, response){
  const blogs = await bloglist.find();
  if (request.body.password != "12345"){
    response.redirect('login')
  }else{
    response.render('admin', {
      pginfo: pagesInfo.admin,
      blogss: blogs,
    })
  }
  
})

pgrtrs.get('/blogs', async function(request, response){
  const blogs = await bloglist.find();
  response.render('blogs', {
    pginfo: pagesInfo.index,
    blogss: blogs,
  })
  
})

pgrtrs.get('/admin/:slug', async function(request,response){
  const blogpost = await bloglist
  .where('slug', request.params.slug);
    
  fs.readFile('./public/blogs/'+ blogpost[0].slug +'.md', function(err, buf) {
    const result = buf.toString();
    response.render('adminblogpost', {
      blogpost: blogpost[0],
      blogcont: result,
      title: blogpost[0].title,
      pginfo: pagesInfo.index
    })
  });
})

pgrtrs.get('/blogs/:slug', async function(request,response){
  const blogpost = await bloglist
  .where('slug', request.params.slug);
    
  fs.readFile('./public/blogs/'+ blogpost[0].slug +'.md', function(err, buf) {
    const result = md.render(buf.toString());
    response.render('blogposts', {
      blogpost: blogpost[0],
      blogcont: result,
      title: blogpost[0].title,
      pginfo: pagesInfo.index
    })
  });
})

pgrtrs.post('/admin/deleted', async function(request, response){
  const deleted = await bloglist.find({_id: request.body.blogid});
  console.log(request.body.oldslug)
  bloglist.deleteOne({ _id: deleted[0]._id }, function (err){
    fs.unlink('./public/blogs/'+ request.body.oldslug +'.md', function (err) {
      if (err) return handleError(err);
      response.redirect('/admin');
      console.log('File deleted!');
  }); 
  })
})

pgrtrs.post('/admin/updated', async function(request, response){
  const deleted = await bloglist.find({_id: request.body.blogid});
  console.log(request.body)
  const blogtitle = request.body.blogtitle;
  const date = request.body.blogdate;
  const blog = request.body.blogcontent;
  const summary = request.body.blogsumm;
  const newslug = request.body.blogslug;

  const newpost = new bloglist(
    {
      title: blogtitle, //saves the blog with username so itll be filtered out when logginto own profile
      blog_summary: date,
      blog_cont: blog,
      date: summary,
      slug: newslug // this is where the slugg goes
    }
  );

  bloglist.updateOne({ "_id": deleted[0]._id }, {$set: {"_id" : deleted[0]._id, "title": blogtitle, "blog_summary": summary,"blog_cont": blog, "date": date, "slug": newslug}} , { upsert:true } ,function (err){
      
    
    fs.unlink('./public/blogs/'+ request.body.oldslug +'.md', function (err) {
      fs.appendFile('./public/blogs/'+request.body.blogslug+".md", request.body.blogcontent , function (err) {
        if (err) return handleError(err);
      response.redirect('/admin');
      console.log('File deleted!');
     });
      
  }); 
  })
})


pgrtrs.post('/admin/posted', async function(request, response){
  const blogtitle = request.body.blogtitle;
  const date = request.body.blogdate;
  const blog = request.body.blogcontent;
  const summary = request.body.blogsumm;
  const newslug = request.body.blogslug;

  const newpost = new bloglist(
    {
      title: blogtitle, //saves the blog with username so itll be filtered out when logginto own profile
      blog_summary: date,
      blog_cont: blog,
      date: summary,
      slug: newslug // this is where the slugg goes
    }
  );
  newpost.save(function (err, newpost){

    fs.appendFile('./public/blogs/'+newslug+".md", blog , function (err) {
      if (err) return handleError(err);
    response.redirect('/admin');
    console.log('File added!');
   });
  })
})

module.exports = pgrtrs;


