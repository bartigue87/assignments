const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/bountydb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
);

app.use("/bounty", require("./routes/bountyRouter.js"));

app.listen(8787, () => {
  console.log("The server is running on Port 8787");
});

// const express =require("express")
// const app = express()

// app.use(express.json())

// app.use("/bounty", require("./routes/bountyRouter.js"))

// app.listen(9000, () => {
//     console.log("the server is running on Port 9000")
// })

// const express = require("express")
// const app = express()

// app.use(express.json())

// app.use("/bounty", require("./routes/bountyRouter.js"))

// app.listen(9000, () => {
//     console.log("the server is running on Port 9000")
// })
