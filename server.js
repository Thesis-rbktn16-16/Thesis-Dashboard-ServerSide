var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");

var app = express();

var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/../client/dist"));
var station = require("./Bycycle/Station/stationRouter");
var bicycle = require("./Bycycle/Bicycle/bicycleRouter");
var admin = require("./Bycycle/Admin/AdminRouter");
var suggestion = require("./Bycycle/Suggestion/suggestionRouter");

app.use("/", admin);
app.use("/", station);
app.use("/", bicycle);
app.use("/", suggestion);

var PORT = 3002;

app.listen(PORT, function () {
  console.log(
    "bycycle-dashboard-MongoDB RESTful API listening on http://localhost:" +
      PORT
  );
});
