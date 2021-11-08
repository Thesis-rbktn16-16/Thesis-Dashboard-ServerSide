var bicycleRouter = require("express").Router();
var bicycleController = require("../Bicycle/bicycleController");

bicycleRouter
  .route("/bicycle")
  .get(bicycleController.getBicycle)
  .post(bicycleController.createBicycle)
  .put(bicycleController.updateBicycle)
  .delete(bicycleController.deleteBicycle);

bicycleRouter.route("/findBicycle").post(bicycleController.findBicycle);

module.exports = bicycleRouter;
