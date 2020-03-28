const express = require("express");
const bountyRouter = express.Router();
// const uuid = require("uuid/v4");
const Bounty = require("../models/bounty.js");

// const bounties = [
//   {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     isAlive: true,
//     bountyAmount: 1000,
//     type: "Jedi",
//     _id: uuid()
//   },
//   {
//     firstName: "Darth",
//     lastName: "Vader",
//     isAlive: true,
//     bountyAmount: 2000,
//     type: "Sith",
//     _id: uuid()
//   }
// ];

//Get all
bountyRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(bounty);
  });
});

//Post one
bountyRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body);
  newBounty.save((err, saveBounty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(saveBounty);
  });
});

//Delete one
bountyRouter.delete("/:bountyId", (req, res, next) => {
  Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(
        `Successfully deleted item ${deletedItem.firstName} from the database`
      );
  });
});

// Update
bountyRouter.put("/:bountyId", (req, res, next) => {
  Bounty.findOneAndUpdate(
    { _id: req.params.bountyId },
    req.body,
    { new: true },
    (err, updatedBounty) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedBounty);
    }
  );
});

module.exports = bountyRouter;

// bountyRouter
//   .route("/")
//   .get((req, res) => {
//     res.send(bounties);
//   })
//   .post((req, res) => {
//     const newBounty = req.body;
//     newBounty._id = uuid();
//     bounties.push(newBounty);
//     //below not required
//     // res.send(`successfully add ${newBounty.firstName} to the database`);
//     res.send(newBounty);
//   });

// bountyRouter.delete("/:bountyId", (req, res) => {
//   const bountyId = req.params.bountyId;
//   const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
//   bounties.splice(bountyIndex, 1);
//   res.send("success");
// });

// bountyRouter.put("/:bountyId", (req, res) => {
//   const bountyId = req.params.bountyId;
//   const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
//   const updatedBounty = Object.assign(bounties[bountyIndex], req.body);
//   res.send(updatedBounty);
// });
