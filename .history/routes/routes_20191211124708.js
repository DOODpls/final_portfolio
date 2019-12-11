const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');
const bloglist = require('../models/blogschema')

pgrtrs.get('/', function(request, response){
  response.render('index', {
    pginfo: pagesInfo.index
  })
})

pgrtrs.get('/blogs', function(request, response){
  response.render('blogs', {
    pginfo: pagesInfo.index,
    blogss: bloglist
  })
  console.log(blogss)
})

module.exports = pgrtrs;