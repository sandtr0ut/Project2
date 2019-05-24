const db = require("../models");

module.exports = function(app) {
    app.get("/api/wagers", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Wager.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbWager) {
            res.json(dbWager);
        });
    });
    
    // Get route for pulling up a single bet (left-join: User)
    app.get("/api/wagers:id", function(req, res) {
        
        db.Wager.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbWager) {
            res.json(dbWager);
        });
    });
    
    // Place yer bets here!
    app.post("/api/wagers", function(req, res) {
        db.Wager.create(req.body).then(function(dbWager) {
            res.json(dbWager);
        });
    });

    // Delete route for cancelling bets
    app.delete("/api/wagers/:id", function(req, res) {
        db.Wager.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbWager) {
            res.json(dbWager);
        });
    });
    
    app.put("/api/wagers", function(req, res) {
        db.Wager.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbWager) {
            res.json(dbWager);
        });
    });
    
};
