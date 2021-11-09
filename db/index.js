var mongoose = require("mongoose");
var mongoUri = process.env.mongoUrl;

//
var db = mongoose.connect(mongoUri).then(() => {
  console.log("database connected ");
});

module.exports = db;
