const express = require("express");
const interceptedRouter = express.Router();
const uuid = require("uuid/v4");

interceptedRouter.get("/", (req, res, next) => {
  req.body = { name: "bob" };
  next();
});

interceptedRouter.get("/", (req, res, next) => {
  res.send(req.body);
});

module.exports = interceptedRouter;
