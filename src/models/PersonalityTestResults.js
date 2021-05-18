const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalityTestResultsSchema = new Schema({
    
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  result: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model(
  "Personalitytestresults",
  PersonalityTestResultsSchema
);
