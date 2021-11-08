var mongoose = require("mongoose");
var mongoUri = "mongodb://localhost/bycycle-dashboard";

//
var db = mongoose.connect(mongoUri).then(() => {
  console.log("database connected ");
});

module.exports = db;
