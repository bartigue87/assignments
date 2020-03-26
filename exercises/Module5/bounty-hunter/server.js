const express = require("express");
const app = express();

app.use(express.json());

app.use("/bounty", require("./routes/bountyRouter.js"));

app.listen(9000, () => {
  console.log("The server is running on Port 9000");
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

// app.use(9000, () => {
//     console.log("the server is running on Port 9000")
// })
