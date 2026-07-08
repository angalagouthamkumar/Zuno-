const mongoose = require("mongoose");
const holdingsSchema = require("../schemas/holdingsSchema");

const HoldingsModel = mongoose.model("Holdings", holdingsSchema);

module.exports = { HoldingsModel };