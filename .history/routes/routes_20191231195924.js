const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');
const bloglist = require('../models/blogschema');
const passport = require('passport')
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
}).use(require('markdown-it-sup'))
.use(require('markdown-it-sub'))
.use(require('markdown-it-mark'));
var emoji = require('markdown-it-emoji');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
// Or for light version
// var emoji = require('markdown-it-emoji/light');

md.use(emoji);
var fs = require("fs");

pgrtrs.get('/', forwardAuthenticated ,function(request, response){
  response.render('index', {
    pginfo: pagesInfo.index
  })
})

pgrtrs.get('/logout', function(request, response){
  request.logout();
  response.redirect('/');
})

pgrtrs.get('/login', function(request, response){
  response.render('adminlogin', {
    pginfo: pagesInfo.admin
  })
 })

pgrtrs.post('/admin', (req, res, next) => { 
  passport.authenticate('local', {
    successRedirect: '/admin', 
    failureRedirect: '/login' 
  })(req, res, next);

})
pgrtrs.get('/admin', ensureAuthenticated, async function(request, response){
 const blogs = await bloglist.find();
 const categories = await bloglist.distinct('category');
  response.render('admin', {
    pginfo: pagesInfo.admin,
    blogss: blogs,
    categories: categories
  })
})
var url, searchq;
pgrtrs.get('/blogs', async function(request, response){
  const blogs = await bloglist.find().sort({"date": -1,"_id": -1}).limit(2);
  const results = await bloglist.distinct('tags');
  const categories = await bloglist.distinct('category');
  url = request.originalUrl;
    response.render('blogs', {
      pginfo: pagesInfo.index,
      blogss: blogs,
      tags: results,
      category: categories
    })
})

pgrtrs.get("/get-post/:start/:limit", async function (request, response){
  var blogs
  if ( url == '/search/?q='+searchq ){
    blogs = await bloglist.find().or([{title: {$regex: searchq, $options: "i"}}, {category: {$regex: searchq, $options: "i"}}, {tags: {$regex: searchq, $options: "i"}}, {blog_cont: {$regex: searchq, $options: "i"}}]).sort({"_id": -1}).skip(parseInt(request.params.start)).limit(parseInt(request.params.limit))
  } else if (url == '/blogs'){
    blogs = await bloglist.find().sort({"date": -1,"_id": -1}).skip(parseInt(request.params.start)).limit(parseInt(request.params.limit));
  } else if (url == '/category/'+searchq){
    blogs = await bloglist.find().or([{category: {$regex: searchq, $options: "i"}}]).sort({"_id": -1}).skip(parseInt(request.params.start)).limit(parseInt(request.params.limit));
  } else if (url == '/tag/'+searchq){
    blogs = await bloglist.find().or([{tags: {$regex: searchq, $options: "i"}}]).sort({"_id": -1}).skip(parseInt(request.params.start)).limit(parseInt(request.params.limit));
  }
  const categories = await bloglist.distinct('category');
    response.send({
      pginfo: pagesInfo.index,
      blogss: blogs,
      categories: categories
    })
})

pgrtrs.get('/search', async function(request, response){
  
  searchq = request.query.q
  url = request.originalUrl;
  title= "Search Result "
  try{
    if(searchq == ""){
      response.redirect('/search/404');
    }else{
        const blogs = await bloglist.find().or([{title: {$regex: searchq, $options: "i"}}, {category: {$regex: searchq, $options: "i"}}, {tags: {$regex: searchq, $options: "i"}}, {blog_cont: {$regex: searchq, $options: "i"}}]).sort({"_id": -1}).limit(2);
        response.render('blogsearch',{
        blogres: blogs,
        query: searchq,
        pagettl: title,
        pginfo: pagesInfo.index
      }
      )
    }
  }catch{
    response.redirect('/search/404');
  }
})
pgrtrs.get('/tag/:items', async function(request, response){
  
  searchq = request.params.items;
  url = request.originalUrl;
  title= "Tag: "
  try{
    if(searchq == ""){
      response.redirect('/search/404');
    }else{
        const blogs = await bloglist.find().or([{tags: {$regex: searchq, $options: "i"}}]).sort({"_id": -1}).limit(2);
        response.render('blogsearch',{
        blogres: blogs,
        query: searchq,
        pagettl: title,
        pginfo: pagesInfo.index
      }
      )
    }
  }catch{
    response.redirect('/search/404');
  }
})
pgrtrs.get('/category/:items', async function(request, response){
  searchq = request.params.items;
  url = request.originalUrl;
  title= "Category: "
  try{
    if(searchq == ""){
      response.redirect('/search/404');
    }else{
        const blogs = await bloglist.find().or([{category: {$regex: searchq, $options: "i"}}]).sort({"_id": -1}).limit(2);
        response.render('blogsearch',{
        blogres: blogs,
        query: searchq,
        pagettl: title,
        pginfo: pagesInfo.index
      }
      )
    }
  }catch{
    response.redirect('/search/404');
  }
})


pgrtrs.get('/admin/:slug', ensureAuthenticated, async function(request,response){
  const blogpost = await bloglist
  .where('slug', request.params.slug);
  bloglist.distinct('category', function(err, results){
    response.render('adminblogpost', {
      blogpost: blogpost[0],
      title: blogpost[0].title,
      pginfo: pagesInfo.index,
      categories: results
    })
  });
})
//
pgrtrs.get('/blogs/:slug', async function(request,response){
  try{
    
  const blogpost = await bloglist
  .where('slug', request.params.slug);
    const result = md.render(blogpost[0].blog_cont);
    response.render('blogposts', {
      blogpost: blogpost[0],
      blogcont: result,
      title: blogpost[0].title,
      pginfo: pagesInfo.index
  })
  }catch{
    response.redirect('/404');
  }
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
  const blogtitle = request.body.blogtitle;
  const date = request.body.blogdate;
  const blog = request.body.blogcontent;
  const summary = request.body.blogsumm;
  const newslug = request.body.blogslug;
  const tags = request.body.tags;
  const categoryy = request.body.category;

  const newpost = new bloglist(
    {
      title: blogtitle, 
      blog_summary: date,
      blog_cont: blog,
      date: summary,
      slug: newslug 
    }
  );

  var tagsarray = tags.split(',');

  bloglist.updateOne({ "_id": deleted[0]._id }, {$set: {"_id" : deleted[0]._id, "title": blogtitle, "blog_summary": summary,"blog_cont": blog, "date": date, "slug": newslug, "tags": tagsarray, "category" : categoryy}} , { upsert:true } ,function (err){
      
    if (err) return handleError(err);
    response.redirect('/admin');
  })
})


pgrtrs.post('/admin/posted', ensureAuthenticated, async function(request, response){
  const blogtitle = request.body.blogtitle;
  const date = request.body.blogdate;
  const blog = request.body.blogcontent;
  const summary = request.body.blogsumm;
  const slug = request.body.blogslug;
  const tags = request.body.tags;
  const category = request.body.category
  var tagsarray = tags.split(',');


  const newpost = new bloglist(
    {
      title: blogtitle, 
      blog_summary: summary,
      blog_cont: blog,
      date: date,
      slug: slug,
      tags: tagsarray,
      category: category
    }
  );
  newpost.save(function (err, newpost){

      if (err) return handleError(err);
    response.redirect('/admin');
   });
})

module.exports = pgrtrs;


