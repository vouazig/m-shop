const mongoose = require("mongoose");

const db = mongoose.connect(
  "mongodb+srv://m_shop:m_shop123@cluster0.ny0ry.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
module.exports = db;
