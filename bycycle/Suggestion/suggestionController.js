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

exports.allSuggestion = (req, res) => {
  Bycycle.SuggestionModel.find({}, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(result);
  });
};

exports.findSuggestion = (req, res) => {};

exports.deleteSuggestion = (req, res) => {};
