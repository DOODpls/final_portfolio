const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');

pgrtrs.get('/', function(request, response){
  response.render('index', pagesInfo)
  pagesInfo.array.forEach(title => {
    console.log(title)
  });
})

module.exports = pgrtrs;