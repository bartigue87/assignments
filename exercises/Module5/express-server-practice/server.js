// const express = require("express");
// const app = express();
// const morgan = require("morgan");
// const mongoose = require("mongoose");

// // Middleware (for every request)
// app.use(express.json()); // looks for a request body and turns it into 'req.body

// app.use(morgan("dev")); //logs requests to the console

// //app.use("/users", (req, res, next) => {
// //   next()
// // })

// //app.get('/users' (req, res, next) => {})

// //Connect to DB
// mongoose.connect(
//   "mongodb://localhost:27017/userdb",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   },
//   () => console.log("Connected to the DB")
// );

// //1. Endpoint (mount push)
// //2. Callbcak function

// app.use("/users", require("./routes/userRouter.js"));

// // Error handler
// app.use((err, req, res, next) => {
//   console.log(err);
//   return res.send({ errMsg: err.message });
// });

// // 2 arguments: 1. Port 2. Callback func
// app.listen(8888, () => {
//   console.log("The server is running on Port 8888");
// });

// // control c to stop server

const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
  "mongodb://localhost:27017/producedb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the DB")
);

app.use("/produce", require("./routes/userRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

//Not sure what this is or if its being used in future....

// app.get("/", (req, res) => {
//   res.send("this is home");
// });

// app.get("/user", (req, res) => {
//   res.send({ name: "joe", age: 25 });
// });

app.listen(900, () => {
  console.log("The server is running");
});
