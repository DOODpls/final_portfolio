const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');
const bloglist = require('../models/blogschema');
const passport = require('passport')
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
  const username = req.body.username;
  var obj = {username: username}
  passport.authenticate('local', {
    successRedirect: '/admin', 
    failureRedirect: '/login' 
  })(req, res, next);

})
pgrtrs.get('/admin', ensureAuthenticated, async function(request, response){
 const blogs = await bloglist.find();
   response.render('admin', {
     pginfo: pagesInfo.admin,
     blogss: blogs,
   })
  
})

pgrtrs.get('/blogs', async function(request, response){
  const blogs = await bloglist.find();
  response.render('blogs', {
    pginfo: pagesInfo.index,
    blogss: blogs,
  })
  
})

pgrtrs.get('/admin/:slug', ensureAuthenticated, async function(request,response){
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
  const tags = request.body.tags;

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

  bloglist.updateOne({ "_id": deleted[0]._id }, {$set: {"_id" : deleted[0]._id, "title": blogtitle, "blog_summary": summary,"blog_cont": blog, "date": date, "slug": newslug, "tags": tagsarray}} , { upsert:true } ,function (err){
      
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
  var tagsarray = tags.split(',');


  const newpost = new bloglist(
    {
      title: blogtitle, 
      blog_summary: summary,
      blog_cont: blog,
      date: date,
      slug: slug,
      tags: tagsarray
    }
  );
  newpost.save(function (err, newpost){

      if (err) return handleError(err);
    response.redirect('/admin');
   });
})

module.exports = pgrtrs;


