const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jeelviradiya'
const fetchuser = require('../middleware/fetchuser')

// ROUTE 1: Create a User using: POST "/api/auth/createUser". Doesn't require Auth
router.post('/createUser', [body('name', 'Enter valid name').isLength({ min: 3 }), body('email', "Enter valid mail").isEmail(), body('password', "Password length should be between 5 to 10 character").isLength({ min: 5, max: 10 })], async (req, res) => {
  console.log(req.body);

  //Check validation
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  try {
    //create user in collection in the form of document is email doesn't exists
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ errors: "This Email is already exists" });
    }

    // generate password hash value
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password, salt)

    //create user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    })
    //fetch id from user
    const UserId = {
      user: {
        id: user.id
      }
    }
    //generate authentication token
    const authToken = jwt.sign(UserId, JWT_SECRET)
    console.log(authToken)

    //return json
    res.json({ "Done": "User created successfully", "UserInfo": user, "authToken": authToken })

  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error")
  }

})

// ROUTE 2: Login a User using: POST "/api/auth/login". Doesn't require Auth
router.post('/login', [body('email', "Enter valid mail").isEmail(), body('password', "password should not be blank").notEmpty()], async (req, res) => {

  //Check validation
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  const { email, password } = req.body
  try {
    //create user in collection in the form of document is email doesn't exists
    let user = await User.findOne({ email: email })
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    //fetch id from user
    const UserId = {
      user: {
        id: user.id
      }
    }
    //generate authentication token
    const authToken = jwt.sign(UserId, JWT_SECRET)
    console.log(authToken)

    //return json
    res.json({ "Done": "User find successfully", "UserInfo": user, "authToken": authToken })

  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error")
  }

})

// ROUTE 3: Get user detail while loggedin using: POST "/api/auth/getuser" Login require
router.post('/getuser', fetchuser, async (req, res) => {
  try {

    const userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)

  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error")
  }
})
module.exports = router
