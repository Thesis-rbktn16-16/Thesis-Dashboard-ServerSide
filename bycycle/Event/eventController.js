var Bycycle = require("../Bycycle");

exports.createEvent = function (req, res) {
  const EventData = req.body;
  Bycycle.EventModel.create(req.body)
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findEvent = (req, res) => {
  let EventName = req.body.bikeId;

  Bycycle.EventModel.findOne({ EventName }, (err, result) => {
    if (err) res.status(403).send(err);
    res.status(200).send(result);
  });
};

// get all the Event
exports.getEvent = (req, res) => {
  Bycycle.EventModel.find({}, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(result);
  });
};

// update Event
exports.updateEvent = (req, res) => {};

//delete Event
exports.deleteEvent = (req, res) => {};
