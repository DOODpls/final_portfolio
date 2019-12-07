const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');

app.get('/', function(request, response){
  response.render('index', pagesInfo)
})