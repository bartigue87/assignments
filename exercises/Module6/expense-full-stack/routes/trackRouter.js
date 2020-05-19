// const express = require("express");
// const trackRouter = express.Router();
// const Track = require("../models/track.js");

// // //Get all
// // trackRouter.get("/", (req, res, next) => {
// //     Track.find((err, tracks) => {
// //         if (err) {
// //             res.status(500)
// //             return next(err)
// //         }
// //         return res.status(200).send(tracks)
// //     })
// // })

// //Get tracks by user id
// trackRouter.get("/user", (req, res, next) => {
//   Track.find({ user: req.user._id }, (err, tracks) => {
//     if (err) {
//       res.status(500);
//       return next(err);
//     }
//     return res.status(200).send(tracks);
//   });
// });

// // Add new
// trackRouter.post("/", (req, res, next) => {
//   req.body.user = req.user._id;
//   const newTrack = new Track(req.body);
// });
