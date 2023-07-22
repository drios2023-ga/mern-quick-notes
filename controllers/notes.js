
const Note = require('../models/notes');

module.exports = {

    create

};



async function create(req, res) {
  try {
    // Add the note to the db
    console.log(req.body)
    const note = await Note.create(req.body);
 
  } catch (err) {
    res.status(400).json(err);
  }
}