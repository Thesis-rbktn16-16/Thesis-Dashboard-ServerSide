var mongoose = require("mongoose");
const db = require("../db/index.js");
mongoose.Promise = global.Promise;

var adminSchema = mongoose.Schema(
  {
    User: { type: String, unique: true, required: true },
    Password: { type: String, required: true },
    Email: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

var AdminModel = mongoose.model("ADMIN", adminSchema);

var createStationSchema = mongoose.Schema(
  {
    location: { type: String, required: true },
    numberOfBikes: { type: Number, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    Bicycle: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bicycle",
      },
    ],
  },
  {
    timestamps: true,
  }
);
var StationModel = mongoose.model("station", createStationSchema);

var CreateBicycleSchema = mongoose.Schema(
  {
    category: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
var BicycleModel = mongoose.model("Bicycle", CreateBicycleSchema);

var CreateSuggestionSchema = mongoose.Schema(
  {
    location: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    duration: { type: String, required: true },
    distance: { type: String, required: true },
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
