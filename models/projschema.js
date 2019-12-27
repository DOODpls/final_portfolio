const mongoose = require('mongoose');
const projectschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
);


const projectschemas = mongoose.model('projects', projectschema);

module.exports = projectschemas;