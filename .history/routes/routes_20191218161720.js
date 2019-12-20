const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');
const bloglist = require('../models/blogschema');
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});
var emoji = require('markdown-it-emoji');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
// Or for light version
// var emoji = require('markdown-it-emoji/light');

md.use(emoji);
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
pgrtrs.post('/admin', ensureAuthenticated, async function(request, response){
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

pgrtrs.get('/admin/:slug', async, ensureAuthenticated, function(request,response){
  const blogpost = await bloglist
  .where('slug', request.params.slug);
    
    response.render('adminblogpost', {
      blogpost: blogpost[0],
      title: blogpost[0].title,
      pginfo: pagesInfo.index
    })
})
//
pgrtrs.get('/blogs/:slug', async function(request,response){
  const blogpost = await bloglist
  .where('slug', request.params.slug);
    const result = md.render(blogpost[0].blog_cont);
    response.render('blogposts', {
      blogpost: blogpost[0],
      blogcont: result,
      title: blogpost[0].title,
      pginfo: pagesInfo.index
    })
})

pgrtrs.post('/admin/deleted', ensureAuthenticated, async function(request, response){
  const deleted = await bloglist.find({_id: request.body.blogid});
  console.log(request.body.oldslug)
  bloglist.deleteOne({ _id: deleted[0]._id }, function (err){
      if (err) return handleError(err);
      response.redirect('/admin');
  })
})

pgrtrs.post('/admin/updated',ensureAuthenticated, async function(request, response){
  const deleted = await bloglist.find({_id: request.body.blogid});
  console.log(request.body)
  const blogtitle = request.body.blogtitle;
  const date = request.body.blogdate;
  const blog = request.body.blogcontent;
  const summary = request.body.blogsumm;
  const newslug = request.body.blogslug;

  const newpost = new bloglist(
    {
      title: blogtitle, 
      blog_summary: date,
      blog_cont: blog,
      date: summary,
      slug: newslug 
    }
  );

  bloglist.updateOne({ "_id": deleted[0]._id }, {$set: {"_id" : deleted[0]._id, "title": blogtitle, "blog_summary": summary,"blog_cont": blog, "date": date, "slug": newslug}} , { upsert:true } ,function (err){
      
    if (err) return handleError(err);
    response.redirect('/admin');
  })
})


pgrtrs.post('/admin/posted', async function(request, response){
  const blogtitle = request.body.blogtitle;
  const date = request.body.blogdate;
  const blog = request.body.blogcontent;
  const summary = request.body.blogsumm;
  const slug = request.body.blogslug;

  const newpost = new bloglist(
    {
      title: blogtitle, 
      blog_summary: summary,
      blog_cont: blog,
      date: date,
      slug: slug
    }
  );
  newpost.save(function (err, newpost){

      if (err) return handleError(err);
    response.redirect('/admin');
   });
})

module.exports = pgrtrs;


