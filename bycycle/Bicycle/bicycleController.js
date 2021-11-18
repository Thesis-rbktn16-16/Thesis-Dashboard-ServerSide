var Bycycle = require("../Bycycle");

exports.createBicycle = function (req, res) {
  const BicycleData = req.body;
  Bycycle.BicycleModel.create(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findBicycle = (req, res) => {
  let BicycleName = req.body.bikeId;

  Bycycle.BicycleModel.findOne({ BicycleName }, (err, result) => {
    if (err) res.status(403).send(err);
    res.status(200).send(result);
  });
};

// get all the Bicycle
exports.getBicycle = (req, res) => {
  Bycycle.BicycleModel.find({}, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(result);
  });
};

// update Bicycle
exports.updateBicycle = (req, res) => {};

//delete Bicycle
exports.deleteBicycle = (req, res) => {};
