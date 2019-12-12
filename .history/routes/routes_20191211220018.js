const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');
const bloglist = require('../models/blogschema');
var MarkdownIt = require('markdown-it'),
var fs = require("fs");

pgrtrs.get('/', function(request, response){
  response.render('index', {
    pginfo: pagesInfo.index
  })
})

pgrtrs.get('/admin', function(request, response){
  response.render('admin', {
    pginfo: pagesInfo.admin
  })
})

pgrtrs.get('/blogs', async function(request, response){
  const blogs = await bloglist.find();
  response.render('blogs', {
    pginfo: pagesInfo.index,
    blogss: blogs,
  })
  
})

pgrtrs.get('/blogs/:slug', async function(request,response){
  const blogpost = await bloglist
  .where('slug', request.params.slug);
    
  fs.readFile('./public/blogs/'+ blogpost[0].slug +'.md', function(err, buf) {
    console.log(buf.toString());
    response.render('blogposts', {
      blogpost: blogpost[0],
      blogcont: buf.toString(),
      title: blogpost[0].title,
      pginfo: pagesInfo.index
    })
  });
})

module.exports = pgrtrs;


