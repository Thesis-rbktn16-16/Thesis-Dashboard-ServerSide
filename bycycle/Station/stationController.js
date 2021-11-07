var Bycycle = require("../Bycycle");
var mongoose = require("mongoose");

exports.createStation = (req, res) => {
  const Station = req.body;
  Bycycle.StationModel.create(Station)
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
