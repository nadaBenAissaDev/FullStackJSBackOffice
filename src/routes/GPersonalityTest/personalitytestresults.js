const express = require("express");
const router = express.Router();

const PersonalityTestResults = require("../../models/PersonalityTestResults");

// // GET PersonalityTest
// // @route GET /PersonalityTest
// // @access Private
router.route("/").get((req, res) => {
  PersonalityTestResults.find()
    .then((tests) => res.json(tests))
    .catch((err) => res.status(400).json("Error: " + err));
});

// // Add new PersonalityTest question
// // @route POST /PersonalityTestResults/add
// // @desc add question
// // @access Private
router.route("/add").post((req, res) => {
  new PersonalityTestResults({
    userId: req.body.userId,
    result: req.body.result,
  })
    .save()
    .then(() => res.json("Success!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
