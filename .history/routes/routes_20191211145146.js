const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');
const bloglist = require('../models/blogschema')

pgrtrs.get('/', function(request, response){
  response.render('index', {
    pginfo: pagesInfo.index
  })
})

pgrtrs.get('/blogs', async function(request, response){
  const blogs = await bloglist.find();
  response.render('blogs', {
    pginfo: pagesInfo.index,
    blogss: blogs
  })
})

pgrtrs.get('/blog/:slug', async function(request,response){
  const blogpost = await bloglist
  .where('slug', req.params.slug);
  if(blogpost.length == 0){
    response.render('404')
  }
})

module.exports = pgrtrs;