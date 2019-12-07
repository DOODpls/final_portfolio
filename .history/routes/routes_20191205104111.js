const express = require('express');
const pgrtrs = express.Router();
const pagesInfo = require('./page_info');

pgrtrs.get('/', forwardAuthenticated, (req, res) => 
res.render('index', pagesInfo));