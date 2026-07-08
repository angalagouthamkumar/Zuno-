const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const OrderModel = mongoose.model("Order", ordersSchema);
module.exports = { OrderModel };