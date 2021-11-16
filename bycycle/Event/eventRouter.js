var eventRouter = require("express").Router();
var eventController = require("../Event/eventController");

eventRouter
  .route("/event")
  .get(eventController.getEvent)
  .post(eventController.createEvent)
  .put(eventController.updateEvent)
  .delete(eventController.deleteEvent);

eventRouter.route("/findEvent").post(eventController.findEvent);

module.exports = eventRouter;
