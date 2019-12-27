const mongoose = require('mongoose');
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
    tags: {
      type: Array,
      required: true;
    }
  }
);


const blogschemas = mongoose.model('blogs', blogschema);

module.exports = blogschemas;