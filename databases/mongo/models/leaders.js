var mongoose = require('mongoose');
var db = require('../config');

var LeadersSchema = mongoose.Schema({
  nickname: String,
  score: Number,
});

var Leaders = mongoose.model('Leaders', LeadersSchema); 

getAllLeaders = function (callback) { 
  Leaders.find({}, function(err, leaders) {
    if (err) {
      callback(err);
    } else {
      callback(null, leaders);
    }
  });
}

createLeaders = function (objLeader, callback) {
  Leaders.create(objLeader, function (err, leader) {
    if (err) {
      callback(err);
    } else {
      callback(null, leader);
    }
  });
}

module.exports.createLeaders = createLeaders;
module.exports.getAllLeaders = getAllLeaders;
