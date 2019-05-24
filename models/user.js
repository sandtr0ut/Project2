module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    // Additional auth-related definitions??
  });
  
  User.associate = function(models) {
      User.hasMany(models.Wagers, {
          onDelete: "cascade"
      });
  };
  return User;
};
