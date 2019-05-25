// var db = require("../models");

module.exports = function(app) {
    app.get("/api/user/:id", function(request, response) {
        response.send("Hello, world!");
    });
};
