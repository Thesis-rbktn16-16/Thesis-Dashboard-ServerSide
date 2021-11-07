var Bycycle = require("../Bycycle");
var mongoose = require("mongoose");

exports.createSuggestion = (req, res) => {
  const Suggestion = req.body.Suggestion;
  Bycycle.SuggestionModel.create(Suggestion)
    .then((data) => {
      console.log("suggestion:", data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.allSuggestion = (req, res) => {};

exports.findSuggestion = (req, res) => {};

exports.deleteSuggestion = (req, res) => {};
