/* eslint-disable dot-notation */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// var db = require("../models");

const apis = require("../controllers/externalAPI");

function getSports(id, request, response) {
    apis.theRundown.get
        .events(id)
        .then(requestedData => {
            const { data } = requestedData;
            let eventsArray = [];

            for (var i = 0; i < data.events.length; i++) {
                var game = data.events[i];

                var details = {
                    sport: "Major League Baseball",
                    eventDate: game.event_date,
                    awayTeam: game.teams[0].name,
                    homeTeam: game.teams[1].name,
                    awayPoints: game.lines["1"]["spread"]["point_spread_away"],
                    homePoints: game.lines["1"]["spread"]["point_spread_home"],
                    awayMoney: game.lines["1"]["moneyline"]["moneyline_away"],
                    homeMoney: game.lines["1"]["moneyline"]["moneyline_home"],
                    totalOver: game.lines["1"]["total"]["total_over"],
                    totalUnder: game.lines["1"]["total"]["total_under"],
                    totalOverMoney: game.lines["1"]["total"]["total_over_money"],
                    totalUnderMoney: game.lines["1"]["total"]["total_under_money"],
                };
                eventsArray.push(details);
            }
            response.render("sports", {
                eventsArray,
            });
        })
        .catch(err => console.log(err));
}

module.exports = function(app) {
    // Load index page
    app.get("/", function(request, response) {
        response.render("index", request);
    });
    // Load example page and pass in an example by id
    app.get("/login", function(request, response) {
        response.render("login", request);
    });
    app.get("/signup", function(request, response) {
        response.render("signup", request);
    });
    app.get("/preferences", function(request, response) {
        response.render("preferences", request);
    });
    app.get("/mlb", function(request, response) {
        getSports(3, request, response);
    });
    app.get("/nba", function(request, response) {
        getSports(4, request, response);
    });
    app.get("/nfl", function(request, response) {
        getSports(2, request, response);
    });
    app.get("/nhl", function(request, response) {
        getSports(6, request, response);
    });
    app.get("/mls", function(request, response) {
        getSports(10, request, response);
    });
    // Render 404 page for any unmatched routes
    app.get("*", function(request, response) {
        response.render("404", response);
    });
};
