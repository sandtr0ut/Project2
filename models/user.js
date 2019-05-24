module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    // Additional auth-related definitions?
  });
  
  User.associate = function(models) {
      User.hasMany(models.Wager, {
          onDelete: "cascade"
      });
  };
  return User;
};
