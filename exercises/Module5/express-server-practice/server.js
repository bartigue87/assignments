const express = require("express");
const app = express();

// Middleware (for every request)
app.use(express.json()); // looks for a request body and turns it into 'req.body

//1. Endpoint (mount push)
//2. Callbcak function

app.use("/users", require("./routes/userRouter.js"));

// 2 arguments: 1. Port 2. Callback func
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});

// control c to stop server
