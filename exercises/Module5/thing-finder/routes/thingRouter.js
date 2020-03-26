const express = require("express");
const thingRouter = express.Router();
const uuid = require("uuid/v4");

const things = [
  {
    name: "banana",
    type: "food",
    price: 200,
    _id: uuid()
  },
  {
    name: "pants",
    type: "clothing",
    price: 2500,
    _id: uuid()
  },
  {
    name: "basket ball",
    type: "toy",
    price: 1000,
    _id: uuid()
  },
  {
    name: "rockem sockem robots",
    type: "toy",
    price: 1500,
    _id: uuid()
  },
  {
    name: "shirt",
    type: "clothing",
    price: 800,
    _id: uuid()
  },
  {
    name: "soup",
    type: "food",
    price: 300,
    _id: uuid()
  },
  {
    name: "flour",
    type: "food",
    price: 100,
    _id: uuid()
  }
];

//Get all
thingRouter.get("/", (req, res) => {
  res.send(things);
});

//Get one
thingRouter.get("/:thingId", (req, res) => {
  const thingId = req.params.thingId;
  const foundThing = things.find(thing => thing._id === thingId);
  res.send(foundThing);
});

//Get by type
thingRouter.get("/search/type", (req, res) => {
  const type = req.query.type;
  const filteredType = things.filter(thing => thing.type === type);
  res.send(filteredType);
});

//Post one
thingRouter.post("/", (req, res) => {
  const newThing = req.body;
  newThing._id = uuid();
  things.push(newThing);
});

module.exports = thingRouter;
