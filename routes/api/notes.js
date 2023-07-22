const express = require('express');
const notesCtrl = require('../../controllers/notes');
const router = express.Router();

// All paths start with '/api/notes'
router.post('/', notesCtrl.create);
console.log('routing');

module.exports = router;