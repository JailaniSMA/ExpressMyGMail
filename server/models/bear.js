var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  name : String

});

module.exports = mongoose.model('myusers', blogSchema);
