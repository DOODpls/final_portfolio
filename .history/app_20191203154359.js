const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');


appp.use(express.urlencoded({ extended: false }));

app.get('/', function(request, response){
  response.render('index', pageContent.index)
})


app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`)
})