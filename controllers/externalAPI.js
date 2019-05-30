/* eslint-disable camelcase */
require("dotenv").config();
const axios = require("axios");

module.exports = {
    theOdds: {
        get: {
            sports: function() {
                return axios.get("https://api.the-odds-api.com/v3/sports", {
                    params: {
                        api_key: "174f173495f284be13b11968a2dcca1e",
                        // api_key: process.env.THE_ODDS_API_KEY,
                        all: 1,
                    },
                });
            },
            odds: function(sport, region) {
                return axios.get("https://api.the-odds-api.com/v3/odds", {
                    params: {
                        api_key: "174f173495f284be13b11968a2dcca1e",
                        // api_key: process.env.THE_ODDS_API_KEY,
                        sport: sport,
                        region: region,
                    },
                });
            },
        },
    },
    
    theRundown: {
        get: {
            sports: function() {
                return axios.request({
                    url: "https://therundown-therundown-v1.p.rapidapi.com/sports",
                    method: "get",
                    headers: {"X-RapidAPI-Host": "therundown-therundown-v1.p.rapidapi.com"},
                    headers: {"X-RapidAPI-Key": "ce809ebaf1mshffed23de73fa792p1c723djsn42af7df6070e"},
                });
            },
            events: function() {
                return axios.request({
                    url: "https://therundown-therundown-v1.p.rapidapi.com/sports/3/events?include=all_periods%2C+scores%2C+and%2For+teams",
                    method: "get",
                    headers: {"X-RapidAPI-Host": "therundown-therundown-v1.p.rapidapi.com"},
                    headers: {"X-RapidAPI-Key": "ce809ebaf1mshffed23de73fa792p1c723djsn42af7df6070e"},
                });
            },
        }
    }
};
