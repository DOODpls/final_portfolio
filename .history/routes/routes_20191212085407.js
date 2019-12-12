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
    response.redirect('/login')
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
  const deleted = await bloglist.find({_id: request.params});
  console.log(deleted)
  bloglist.deleteOne({ _id: deleted[0]._id }, function (err){
    if (err) return handleError(err);
    response.render('admin',{
      pginfo: pagesInfo.admin,
      blogss: blogs,
    })
  })
})

module.exports = pgrtrs;


