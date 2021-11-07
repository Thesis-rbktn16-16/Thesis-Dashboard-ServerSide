var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var station = require("./School/station/stationRoute");
var bicycle = require("./School/bicycle/bicycleRouter");
var admin = require("./School/Admin/AdminRouter");
var suggestion = require("./School/suggestion/suggestionRouter");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// admin is admin
app.use("/", admin);

// teacher is the station
app.use("/", teacher);

// student is the bike
app.use("/", student);
// lecture is the suggestion
app.use("/", Lecture);

var PORT = 3002;

app.listen(PORT, function () {
  console.log(
    "bycycle-dashboard-MongoDB RESTful API listening on http://localhost:" +
      PORT
  );
});
