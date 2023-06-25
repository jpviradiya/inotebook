const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Create a User using: POST "/api/auth/createUser". Doesn't require Auth
router.post('/createUser', [body('name', 'Enter valid name').isLength({ min: 3 }), body('email', "Enter valid mail").isEmail(), body('password', "Password length should be between 5 to 10 character").isLength({ min: 5, max: 10 })], async (req, res) => {
  console.log(req.body);

  //Check validation
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  try {//create user in collection in the form of document is email doesn't exists
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ errors: "This Email is already exists" });
    }
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.json({ "Done": "User created successfully", "UserInfo": user })
  }catch(error){
    console.error(error.message)
    res.status(500).send("Some error Occured check console please!")
  }

})

module.exports = router
