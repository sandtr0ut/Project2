/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function (app) {
    
    // Login
    app.get("/api/user/:id", function(request, response) {
        db.User.findOne({
            where: {
                id: request.params.id
            },
        }).then(function(dbUser) {
            response.json(dbUser);
        });
    });
    
    // Create New User
    app.post("/api/user", function (request, response) {
        db.User.create(request.body).then(function (dbUser) {
            response.json(dbUser);
        });
    });
    
    // Delete User
    app.delete("/api/user/:id", function(request, response) {
        db.User.destroy({
            where: {
                id: request.params.id
            }
        }).then(function(dbUser) {
            response.json(dbUser);
        });
    });
    

    // Update User Information
    app.put("/api/user", function(request, response) {
        db.User.update(
            request.body,
            {
                where: {
                    id: request.body.id
                }
            }).then(function(dbUser) {
            response.json(dbUser);
        });
    });

};