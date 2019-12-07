const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');

pgrtrs.get('/', function(request, response){
  response.render('index', pagesInfo)
  pagesInfo.forEach(){
    console.log(pagesInfo.title);
  }
})

module.exports = pgrtrs;