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
  .where('slug', request.params.slug);
  
    response.render('blogposts', {
    blogdate: blogpost[0],
    title: blogpost[0].title
  })
  console.log("dsds")
})

module.exports = pgrtrs;