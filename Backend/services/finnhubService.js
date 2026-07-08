const axios = require("axios");

const API_KEY = process.env.FINNHUB_API_KEY;

const BASE_URL = "https://finnhub.io/api/v1";

const getQuote = async (symbol) => {

    const response = await axios.get(
        `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`
    );

    return response.data;
};

module.exports = {
    getQuote,
};