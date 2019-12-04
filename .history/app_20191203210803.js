const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));

app.get('/', function(request, response){
  response.render('index')
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, response) {
  console.error(err.body)
  response.status(404).render('notfound');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`)
})