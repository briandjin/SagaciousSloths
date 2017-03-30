var mongoose = require('mongoose');
var db = require('../config');

var LeadersSchema = mongoose.Schema({
  nickname: String,
  points: Number,
});

var Leaders = mongoose.model('Leaders', LeadersSchema); 


