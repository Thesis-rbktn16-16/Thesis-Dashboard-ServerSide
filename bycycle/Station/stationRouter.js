var stationRoute = require("express").Router();
var stationController = require("../station/stationController");
//

stationRoute.route("/station").post(stationController.createStation);
stationRoute.route("/allstations").get(stationController.getAllStations);

module.exports = stationRoute;
