var db = require("../models");

module.exports = function(app) {
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
