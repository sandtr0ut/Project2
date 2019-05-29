// var db = require("../models");

var path = require("path");

module.exports = function(app) {
    // Load index page
    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });
      
    app.get("/dashboard", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/dashboard.html"));
    });

    // Load example page and pass in an example by id
    app.get("/login", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/preferences", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/preferences.html"));
    });

    // app.get("/", function(request, response) {
    //     response.render("index", request);
    // });
    
    // app.get("/dashboard", function(request, response) {
    //     response.render("dashboard", request);
    // });

    // // Load example page and pass in an example by id
    // app.get("/login", function(request, response) {
    //     response.render("login", request);
    // });

    // app.get("/signup", function(request, response) {
    //     response.render("signup", request);
    // });

    // app.get("/preferences", function(request, response) {
    //     response.render("preferences", request);
    // });

    // Render 404 page for any unmatched routes
    app.get("*", function(request, response) {
        res.render("404", response);
    });
};
