const express = require('express');
const app = express();
const path = require('path');
const pagesInfo = require('./page_info');

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));

app.get('/', function(request, response){
  response.render('index', pagesInfo)
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, response) {
  console.error(err.body)
  response.status(404).render('404');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`)
})