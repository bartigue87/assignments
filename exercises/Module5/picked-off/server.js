const express = require("express");
const app = express();

app.use(express.json());

app.use("/intercepted", require("./routes/interceptedRouter.js"));

app.use("/intercepted", (req, res, next) => {
  req.body = { name: "rick" };
  next();
});

// app.get("/intercepted", (req, res, next) => {
//   res.send(req.body);
// });

app.listen(8887, () => {
  console.log("running on port 8887");
});
