const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
  "mongodb://localhost:27017/user-authentication",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("connected to the DB")
);

app.use("/auth", require("./routes/authRouter.js"));
app.use("/todo", require("./routes/todoRouter.js"));

app.use((err, req, res, next) => {
  console, log(err);
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("Server is running on Port 9000");
});
