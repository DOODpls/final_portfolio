const express = require('express');
const pgrtrs = expres.Router();
const pagesInfo = require('./page_info');

pgrtrs.get('/', forwardAuthenticated, (req, res) => 
res.render('index', pagesInfo));