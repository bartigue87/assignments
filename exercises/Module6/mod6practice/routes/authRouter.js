const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (err) {
      res.status(403);
      return next(new Error("That username is already taken"));
    }
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
      }
      const token = jwt.sign(savedUser.toObject, process.env.SECRET);
      return res.status(201).send({ token, user: savedUser });
    });
  });
});

module.exports = authRouter;
