const finnhub = require("../services/finnhubService");

exports.getQuote = async (req, res) => {
    try {
        const data = await finnhub.getQuote(req.params.symbol);
        res.json(data);
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};