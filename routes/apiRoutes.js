// var db = require("../models");

// TODO: Implement authentication

module.exports = function(app) {
    app.get("/api/user/:id", function(request, response) {
        // TODO: Implement retrieving a user based on the given id from db
        // const { id } = request.params;
        response.send("Hello from GET!");
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
};
