// Importing both the db and the imports from our connection file in the db folder
const { db, DataTypes, Model } = require("../db/connection.js");

// This first line creates an extended class version of the Model class
class Pokemon extends Model {}

/* The init method is built into the Model class. 
It receives 2 objects, 
the first is the structure of the model
the second is the additional info for our table */
Pokemon.init(
  {
    // The Key is the column name and the value is what data type can be stored in that column
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    // The DECIMAL method allows us to specify a distinct number base, along with how many decimal places
    weight: DataTypes.DECIMAL(10, 2),
  },
  {
    // The sequelize key stores the reference to the database
    sequelize: db,
    // The modelName key stores a String representation of the model
    modelName: "Pokemon",
  }
);

// Exported for use elsewhere in our code
module.exports = Pokemon;
