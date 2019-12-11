const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');

pgrtrs.get('/', function(request, response){
  response.render('index', {
    pginfo: pagesInfo.index
  })
})

pgrtrs.get('/blog', function(request, response){
  response.render('blogs', {
    pginfo: pagesInfo.blogs
  })
})

module.exports = pgrtrs;