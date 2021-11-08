var mongoose = require("mongoose");
var mongoUri =
  "mongodb+srv://Wissem:brinis@brinisdatabase.gedvh.mongodb.net/bycycle?retryWrites=true&w=majority";

//
var db = mongoose.connect(mongoUri).then(() => {
  console.log("database connected ");
});

module.exports = db;
