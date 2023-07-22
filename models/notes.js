const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}, 
  name: String,
  date: String,
  note: String
  
},{collection: 'notes'})

module.exports = mongoose.model('Note', noteSchema);