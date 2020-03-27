const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid/v4");

const bounties = [
  {
    firstName: "Luke",
    lastName: "Skywalker",
    isAlive: true,
    bountyAmount: 1000,
    type: "Jedi",
    _id: uuid()
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    isAlive: true,
    bountyAmount: 2000,
    type: "Sith",
    _id: uuid()
  }
];

bountyRouter
  .route("/")
  .get((req, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    //below not required
    res.send(`successfully add ${newBounty.firstName} to the database`);
  });

bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
  bounties.splice(bountyIndex, 1);
  res.send("success");
});

bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
  const updatedBounty = Object.assign(bounties[bountyIndex], req.body);
  res.send(updatedBounty);
});

module.exports = bountyRouter;

// //practce
// const express = require("express")
// const bountyRouter = express.Router()
// const uuid = require("uuid/v4")

// const bounties = [
//       {
//         firstName: "Luke",
//         lastName: "Skywalker",
//         isAlive: true,
//         bountyAmount: 1000,
//         type: "Jedi",
//         _id: uuid()
//       },
//       {
//         firstName: "Darth",
//         lastName: "Vader",
//         isAlive: true,
//         bountyAmount: 2000,
//         type: "Sith",
//         _id: uuid()
//       }
//     ];

//     bountyRouter.route("/")
//     .get((req,res) => {
//         req.send(bounties)
//     })
//     .post((req,res) => {
//         const newBounty = req.body
//         newBounty._id = uuid()
//         bounties.push(newBounty)
//     })

//     module.exports = bountyRouter

// const express = require("express")
// const bountyRouter = express.Router()
// const uuid = require("uuid/v4")

// const bounties = [
//       {
//         firstName: "Luke",
//         lastName: "Skywalker",
//         isAlive: true,
//         bountyAmount: 1000,
//         type: "Jedi",
//         _id: uuid()
//       },
//       {
//         firstName: "Darth",
//         lastName: "Vader",
//         isAlive: true,
//         bountyAmount: 2000,
//         type: "Sith",
//         _id: uuid()
//       }
//     ];

// bountyRouter.route("/")
// .get((req, res) => {
//     res.send(bounties)
// })
// .post((req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuid()
//     bounties.push(newBounty)
// })

// module.exports = bountyRouter