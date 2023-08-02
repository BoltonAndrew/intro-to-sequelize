/* Pulling in functionality from the sequelize module
- Sequelize is the connection constructor
- DataTypes stores SQL specific data types
- Model is used to create Table structure */
const { Sequelize, DataTypes, Model } = require("sequelize");

// Pulling in path module to better target current directory
const path = require("path");

// The db variable is storing a reference to my database connection
const db = new Sequelize({
  // The dialect value is the version of SQL we're working with
  dialect: "sqlite",
  // The storage value is where the database exists, if it doesn't it will create the file
  storage: path.join(__dirname, "db.sqlite"),
});

// Export the db connection, along with barreling the DataTypes and Model imports
module.exports = {
  db,
  DataTypes,
  Model,
};
