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
  const blogs = await bloglist;
  response.render('blogs', {
    pginfo: pagesInfo.index,
    blogss: blogs
  })
  console.log(bloglist);
})

module.exports = pgrtrs;