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
var event = require("./Bycycle/event/eventRouter");

app.use("/", admin);
app.use("/", station);
app.use("/", bicycle);
app.use("/", suggestion);
app.use("/", event);

var port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("bycycle-dashboard-MongoDB RESTful API listening on :" + port);
});
