var mongoose = require('mongoose');
var db = require('../config');

var CardSchema = mongoose.Schema({
  id: String,
  hints: []
});

var Card = mongoose.model('Card', CardSchema);

module.exports = {
  // add cards from Goole Doc API

  // add a newly submitted hint to hints array

  // update a hint's hide boolean
    // find the card to get the hints array
    // manipulate in server
    // update in DB
};