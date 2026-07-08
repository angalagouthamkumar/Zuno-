const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const axios = require("axios");

const { HoldingsModel } = require("./model/holdingsModel");
const { PositionModel } = require("./model/positionModel");
const { OrderModel } = require("./model/ordersModel");
const authRoutes = require("./Routes/authRoutes"); 
const authMiddleware = require("./middleware/authMiddleware");
const marketController = require("./controllers/marketController");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = [
  process.env.FRONTEND_URL,   // e.g., https://zuno.com
  process.env.DASHBOARD_URL   // e.g., https://dashboard.zuno.com
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          return callback(new Error('CORS policy violation'), false);
        }
        return callback(null, true);
    },
    credentials: true
}));;

app.use("/api/auth", authRoutes);

app.get("/allholdings", authMiddleware, async (req, res) => {
    try {
        const holdings = await HoldingsModel.find({});

        const updatedHoldings = await Promise.all(
            holdings.map(async (holding) => {
                try {
                    const response = await axios.get(
                        `https://finnhub.io/api/v1/quote?symbol=${holding.name}&token=${process.env.FINNHUB_API_KEY}`
                    );

                    const quote = response.data;

                    return {
                        ...holding.toObject(),
                        price: quote.c,
                        change: quote.d,
                        changePercent: quote.dp,
                        currentValue: quote.c * holding.qty,
                        pnl: (quote.c - holding.avg) * holding.qty,
                        day: `${quote.dp.toFixed(2)}%`,
                        net: `${(((quote.c - holding.avg) / holding.avg) * 100).toFixed(2)}%`,
                        isLoss: quote.c < holding.avg
                    };
                } catch (error) {
                    return holding;
                }
            })
        );

        res.json(updatedHoldings);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

app.get("/allpositions", authMiddleware, async (req, res) => {
    try {
        const allpositions = await PositionModel.find({});
        res.json(allpositions);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.get("/quote/:symbol", marketController.getQuote);

app.post("/newOrder", authMiddleware, async (req, res) => {
    try {
        const newOrder = new OrderModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode
        });

        await newOrder.save();
        res.send("New order created");
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

mongoose.connect(url)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});