var bicycleRouter = require("express").Router();
var eventController = require("../Bicycle/eventController");

bicycleRouter
  .route("/event")
  .get(eventController.getBicycle)
  .post(eventController.createBicycle)
  .put(eventController.updateBicycle)
  .delete(eventController.deleteBicycle);

bicycleRouter.route("/findBicycle").post(eventController.findBicycle);

module.exports = bicycleRouter;
