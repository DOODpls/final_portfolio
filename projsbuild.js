
/* For your convenience, this script will build sample collections during development. You will need to supply your own .env to supply your connection details */
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const articles = require('./fiixtures/projects');

const uri = process.env.DB_CONNECTION;
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   // perform actions on the collection object

   const db = client.db("final-portfolio");

   const projcol = db.collection('projects');

   projcol.drop();
   projcol.insertMany(articles, function(err, cursor) {
    if (err) {
      console.log('There was a problem');
    }
    console.log(cursor.insertedCount);
  });

  client.close();
});
