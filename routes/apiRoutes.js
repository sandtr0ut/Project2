// var db = require("../models");
const apis = require("../controllers/externalAPI");

module.exports = function(app) {
    app.get("/api/user", function(request, response) {
        // const { id } = request.body;
        // App will take an id from the request body, get the preferences from the database (via Sequelize),
        // then make a request to the external API, returning both the pulled data combined with the user data
        let dummyData = {
            user: {
                username: "bob123",
                password: "password",
                preferences: ["americanfootball_nfl"],
            },
        };
        apis.theOdds.get
            .odds("americanfootball_nfl", "us")
            .then(requestedData => {
                const { data } = requestedData;
                response.json(data);
            })
            .catch(err => console.log(err));
    });
    app.get("/api/sports", function(request, response) {
        // Route will serve a list of available sports and their corresponding id's, mainly to provide a choice of sports to follow.
        // Sports data changes by season so list is updated dynamically through external api
        apis.theOdds.get
            .sports()
            .then(requestedData => {
                const { data } = requestedData;
                response.json(data);
            })
            .catch(err => console.log(err));
    });
    app.post("/api/user", function(request, response) {
        // TODO: Implement creation of new users
        response.send("Hello from POST!");
    });
    app.put("/api/user", function(request, response) {
        // TODO: Implement updating of users data
        response.send("Hello from PUT!");
    });
    app.delete("/api/user", function(request, response) {
        // TODO: Implement user deletion
        response.send("Hello from DELETE!");
    });
    app.get("/api/login", function(request, response) {
        // TODO: Implement login authorization
        response.send("Hello from login!");
    });
};
