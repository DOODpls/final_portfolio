const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const pageinfo = require('./page_info')
const app = express();
const path = require('path');

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!!!');
});

app.set('view engine', 'ejs');



app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/routes.js'));
app.use('/blogs', require('./routes/routes.js'));
app.use('/admin', require('./routes/routes.js'));
app.use('/login', require('./routes/routes.js'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, response) {
  console.error(err.body)
  response.status(404).render('404');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`)
})