module.exports = function(sequelize, DataTypes) {
    var Wager = sequelize.define("Wager", {
      name: DataTypes.STRING,
      // Sport
      // Team1
      // Team2
      // Event_datetime
      // Odds (1v2)
      // Bet_team
      // Bet_amount ($)
      // Bet_type (pick, odds, total, parlay, etc.)
      // Fee ($)
      
    });
    
    Wager.associate = function(models) {
        Wager.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Wager;
  };