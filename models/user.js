/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first: DataTypes.STRING,
        last: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        preferences: DataTypes.JSON
    });
    return User;
};
