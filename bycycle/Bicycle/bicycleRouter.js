var bicycleRouter = require("express").Router();
var bicycleController = require("../Bicycle/bicycleController");

studentRouter
  .route("/bicycle/:id")
  //all will take the id of the teacher
  .get(bicycleController.getBicycle)
  .post(bicycleController.createBicycle)
  .put(bicycleController.updateBicycle)
  .delete(bicycleController.deleteBicycle);

bicycleRouter.route("/findBicycle").post(bicycleController.findBicycle);

module.exports = bicycleRouter;
