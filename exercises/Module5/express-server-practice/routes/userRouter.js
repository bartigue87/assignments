const express = require("express");
const userRouter = express.Router();
const uuid = require("uuid/v4");

const users = [
  { name: "Brandon", age: 25, _id: uuid() },
  { name: "Michaela", age: 23, _id: uuid() },
  { name: "Bob", age: 42, _id: uuid() },
  { name: "Betty", age: 92, _id: uuid() },
  { name: "George", age: 14, _id: uuid() }
];
//Get all
userRouter.get("/", (req, res) => {
  res.send(users);
});

//Get one
userRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const foundUser = users.find(user => user._id === userId);
  res.send(foundUser);
});

// Get by name (QUERY)
userRouter.get("/search/name", (req, res) => {
  const name = req.query.name;
  const filteredName = users.filter(user => user.name === name);
  res.send(filteredName);
});

//Post one
userRouter.post("/", (req, res) => {
  const newUser = req.body;
  newUser._id = uuid();
  users.push(newUser);
  res.send(newUser);
});

//Delete one
userRouter.delete("/:userId", (req, res) => {
  const userId = req.params.userId;
  const userIndex = users.findIndex(user => user._id === userId);
  users.splice(userIndex, 1);
  //below is not required
  res.send("successfully deleted user");
});

//Update one
userRouter.put("/:userId", (req, res) => {
  const userId = req.params.userId;
  const userIndex = users.findIndex(user => user._id === userId);
  const updatedUser = Object.assign(users[userIndex], req.body);
  res.send(updatedUser);
});

// userRouter
//   .route("/")
//   .get((req, res) => {
//     res.send(users);
//   })
//   .post((req, res) => {
//     const newUser = req.body;
//     newUser._id = uuid();
//     users.push(newUser);
//     //below is not required
//     res.send(`Successfully added ${newUser.name} to the database`);
//   });

module.exports = userRouter;
