const express = require("express");
const app = express();
const morgan = require("morgan");

// Middleware (for every request)
app.use(express.json()); // looks for a request body and turns it into 'req.body

app.use(morgan("dev")); //logs requests to the console

//app.use("/users", (req, res, next) => {
//   next()
// })

//app.get('/users' (req, res, next) => {})

//1. Endpoint (mount push)
//2. Callbcak function

app.use("/users", require("./routes/userRouter.js"));

// 2 arguments: 1. Port 2. Callback func
app.listen(8888, () => {
  console.log("The server is running on Port 8888");
});

// control c to stop server
