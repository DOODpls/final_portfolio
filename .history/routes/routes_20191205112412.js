const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');

pgrtrs.get('/', function(request, response){
  response.render('index', pagesInfo)
  Object.keys(obj).forEach(key=>{
    console.log(`${key} : ${obj[key]}`);
 });
})

module.exports = pgrtrs;