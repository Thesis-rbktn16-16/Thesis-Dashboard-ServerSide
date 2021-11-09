var Bycycle = require("../Bycycle");
var mongoose = require("mongoose");

exports.createStation = (req, res) => {
  const Station = req.body;
  Bycycle.StationModel.create(Station)
    .then((data) => {
      res.status(201).send(data);
      console.log("data", data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllStations = (req, res) => {
  Bycycle.StationModel.find({}, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(result);
  });
};
