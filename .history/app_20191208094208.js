const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const path = require('path');


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/routes.js'));

app.use(express.static('public'));

app.use(function (err, response) {
  console.error(err.body)
  response.status(404).render('404');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`)
})