const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: String,
  date: String,
  note: String
  
},{collection: 'notes'})

module.exports = mongoose.model('Note', noteSchema);