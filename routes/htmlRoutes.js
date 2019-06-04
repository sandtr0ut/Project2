/* eslint-disable prettier/prettier */
// var db = require("../models");

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

    app.get("/example", function(request, response) {
        response.render("example", request);
    });

    app.get("/preferences", function(request, response) {
        response.render("preferences", request);
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(request, response) {
        response.render("404", response);
    });
};
