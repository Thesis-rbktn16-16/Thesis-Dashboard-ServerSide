var suggestionRoute = require("express").Router();
var suggestionController = require("./suggestionController");

suggestionRoute
  .route("/addsuggestion")
  .post(suggestionController.createSuggestion)
  .get(suggestionController.findSuggestion)
  .delete(suggestionController.deleteSuggestion);

suggestionRoute.route("/suggestion").get(suggestionController.allSuggestion);

module.exports = suggestionRoute;
