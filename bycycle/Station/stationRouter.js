var stationRoute = require("express").Router();
var stationController = require("../station/stationController");
//

stationRoute.route("/station").post(stationController.createStation);

module.exports = stationRoute;
