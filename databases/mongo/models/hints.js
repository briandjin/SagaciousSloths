var mongoose = require('mongoose');
var db = require('../config');

var HintsSchema = mongoose.Schema({
  cardID: String,
  hint: String,
  fav: {type: Boolean, default: true}
});

var Hint = mongoose.model('Hint', HintsSchema); 

getHintsByID = function (cardIdObj, callback) { 
  Hint.find(cardIdObj, function(err, hints) {
    if (err) {
      callback(err);
    } else {
      callback(null, hints);
    }
  });
}

createHint = function (hintObj, callback) {
  Hint.create(hintObj, function (err, success) {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
}

console.log('Heroku Test');

module.exports.createHint = createHint;
module.exports.getHintsByID = getHintsByID;
