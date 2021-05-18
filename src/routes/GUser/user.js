
const User = require('../../models/User')
const express = require('express');
const router = express.Router();
const {check, validationResult} = require ('express-validator');
const secret="mysecrettoken";
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');

router.route('/').get((req, res) => {
    User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(User => res.json(User))
      .catch(err => res.status(400).json('Error: ' + err));
  });



// // Add new HR account
// // @route POST /AddHr/add
router.post("/add", async (req, res) => {
  try {
    const { firstname, lastname, email, avatar, password, company } = req.body;

    //hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);

    //vérification
    if (!firstname || !lastname || !email || !avatar || !password || !company) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all the fields." });
    }

    //Check existing accounts
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        errorMessage:
          "The email address: " + existingUser.email + " already exists.",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }

  //Hash the password
  const salt = await bcrypt.genSalt();
  new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    avatar: req.body.avatar,
    password: await bcrypt.hash(req.body.password, salt),
    company: req.body.company,
    role: 1, //HR
    activatedAccount: true, //activated
  })
    .save()
    .then(() => res.json("HR account added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});



module.exports = router;


