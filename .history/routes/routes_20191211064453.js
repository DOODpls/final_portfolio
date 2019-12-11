const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('../page_info');

pgrtrs.get('/', async function(request, response){
  response.render('index', {
    pginfo: pagesInfo.index
  })
})

module.exports = pgrtrs;