var Bycycle = require("../Bycycle");
//
exports.createBicycle = function (req, res) {
  const BicycleData = req.body;

  Bycycle.BicycleModel.create(BicycleData)
    .then((data) => {
      console.log(data);
      res.status(200).send("new bicycle added to database");
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
exports.getBicycle = (req, res) => {};

// update Bicycle
exports.updateBicycle = (req, res) => {};

//delete Bicycle
exports.deleteBicycle = (req, res) => {};
