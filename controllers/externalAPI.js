/* eslint-disable camelcase */
require("dotenv").config();
const axios = require("axios");

module.exports = {
    theOdds: {
        get: {
            sports: function() {
                return axios.get("https://api.the-odds-api.com/v3/sports", {
                    params: {
                        api_key: process.env.THE_ODDS_API_KEY,
                        all: 1,
                    },
                });
            },
            odds: function(sport, region) {
                return axios.get("https://api.the-odds-api.com/v3/odds", {
                    params: {
                        api_key: process.env.THE_ODDS_API_KEY,
                        sport: sport,
                        region: region,
                    },
                });
            },
        },
    },
};
