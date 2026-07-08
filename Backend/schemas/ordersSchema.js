const mongoose = require("mongoose");
const ordersSchema = require("../schemas/ordersSchema");

const OrdersModel = mongoose.model("Orders", ordersSchema);

module.exports = { OrdersModel };