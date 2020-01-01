const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const blogschema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    blog_summary: {
      type: String,
      required: true
    },
    blog_cont: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    tags: [{
      type: String
    }]
  }
);


const blogschemas = mongoose.model('blogs', blogschema);
blogschemas.mongoosePaginate;

module.exports = blogschemas;