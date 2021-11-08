var mongoose = require("mongoose");
const db = require("../db/index.js");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var adminSchema = mongoose.Schema(
  {
    User: { type: String, unique: false, required: false },
    Password: { type: String, required: false },
    Email: { type: String, unique: false, required: false },
  },
  {
    timestamps: true,
  }
);

var AdminModel = mongoose.model("ADMIN", adminSchema);

var CreateStationSchema = mongoose.Schema(
  {
    location: { type: String, required: false },
    numberOfBikes: { type: Number, required: false },
    address: { type: String, required: false },
    contact: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
var StationModel = mongoose.model("station", CreateStationSchema);

var CreateBicycleSchema = mongoose.Schema(
  {
    bikeId: { type: String, required: false },
    category: { type: String, required: false },
    description: { type: String, required: false },
    photo: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
var BicycleModel = mongoose.model("Bicycle", CreateBicycleSchema);

var CreateSuggestionSchema = mongoose.Schema(
  {
    location: { type: String, required: false },
    description: { type: String, required: false },
    photo: { type: String, required: false },
    duration: { type: String, required: false },
    distance: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
var SuggestionModel = mongoose.model("Suggestion", CreateSuggestionSchema);

module.exports = {
  AdminModel,
  SuggestionModel,
  BicycleModel,
  StationModel,
};
