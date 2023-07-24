
const Note = require('../models/notes');

module.exports = {

    create,
    show

};


async function create(req, res) {
  try {
    // Add the note to the db
    //console.log(req.user)
    req.body.user=req.user;
    const note = await Note.create(req.body);
 
  } catch (err) {
    res.status(400).json(err);
  }
}


async function show(req, res){
  try{

    //const notes = await Note.find({user: req.user.id}).exec();
    const notes = await Note.find({}).exec();
    
    console.log(notes);
    res.JSON(notes);

  } catch (err) {
    res.status(400).json(err);
  }


}


// const notes = await Note.find({user: req.user.id}).exec();

//res.json(notes)