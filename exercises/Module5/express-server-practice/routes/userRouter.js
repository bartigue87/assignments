const express = require("express");
const userRouter = express.Router();
// const uuid = require("uuid/v4");
const User = require("../models/user.js");

// const users = [
//   { name: "Brandon", age: 25, _id: uuid() },
//   { name: "Michaela", age: 23, _id: uuid() },
//   { name: "Bob", age: 42, _id: uuid() },
//   { name: "Betty", age: 92, _id: uuid() },
//   { name: "George", age: 14, _id: uuid() }
// ];

//Get all
userRouter.get("/", (req, res, next) => {
  User.find((err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(user);
  });
});

//Get one
// userRouter.get("/:userId", (req, res, next) => {
//   const userId = req.params.userId;
//   const foundUser = users.find(user => user._id === userId);
//   if (!foundUser) {
//     const error = new Error("The item was not found.");
//     res.status(500);
//     return next(error);
//   }
//   res.status(200).send(foundUser);
// });

// // Get by name (QUERY)
// userRouter.get("/search/name", (req, res) => {
//   const name = req.query.name;
//   const filteredName = users.filter(user => user.name === name);
//   res.status(200).send(filteredName);
// });

//Post one
userRouter.post("/", (req, res, next) => {
  const newUser = new User(req.body);
  newUser.save((err, saveUser) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(saveUser);
  });
});

//Delete one
userRouter.delete("/:userId", (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.userId }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(`Successfully deleted item ${deletedItem.name} from the database`);
  });
});

//Update one
userRouter.put("/:userId", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.params.userId }, // find this one to update
    req.body, // update the object with this data
    { new: true }, // send back the updated version
    (err, updatedUser) => {
      if (err) {
        res.send(500);
        return next(err);
      }
      return res.status(201).send(updatedUser);
    }
  );
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
