// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// //User blueprint
// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true
//   }
// });

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produceSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Produce", produceSchema);
