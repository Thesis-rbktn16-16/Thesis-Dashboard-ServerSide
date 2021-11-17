var Bycycle = require("../Bycycle");

exports.createEvent = function (req, res) {
  console.log("hey", req.body);
  const EventData = req.body;
  Bycycle.EventModel.create(req.body)
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findEvent = (req, res) => {
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
