var db = require("../models");

module.exports = function(app) {
  // Find all + incl preferences
  app.get("/api/users", function(req, res) {
    db.User.findAll({
        include: [db.Prefs]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  
  // find a single user with prefs
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Prefs]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
