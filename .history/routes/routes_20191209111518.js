const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');

pgrtrs.get('/', function(request, response){
  response.render('index', {
    pgtitle: pagesInfo.index
  })
})

module.exports = pgrtrs;