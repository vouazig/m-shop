const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const ClientSchema = new mongoose.Schema(
  {
    username: String,
    firstname: String,
    lastname:String,
    email: String,
    password: String,
    type: { type: String, default: "Client" },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
