var mongoose = require("mongoose");
var mongoUri =
  "mongodb+srv://admin:imad123@adminauthbycycle.1x2zz.mongodb.net/test";
// var mongoUri =
//   "mongodb+srv://Wissem:brinis@brinisdatabase.gedvh.mongodb.net/bycycle?retryWrites=true&w=majority";
var mongoUri = process.env.mongoUrl;

//
var db = mongoose.connect(mongoUri).then(() => {
  console.log("database connected ");
});

module.exports = db;
