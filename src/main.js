// Import access to the db variable from connection.js
const { db } = require("../db/connection.js");
// Import the Pokemon model so we can run CRUD operations
const Pokemon = require("./model.js");

// This function is a little more aligned with Java than JavaScript, it is where I write my logic.
async function main() {
  // db.sync tells my database to search for any tables/models that are in my project and create them in the db
  await db.sync();

  // The create method creates an new database entry, it takes an object that mimics the structure of the table/model
  const Pikachu = await Pokemon.create({
    name: "Pikachu",
    type: "Electric",
    weight: 6,
  });

  // JSON.stringify is used here to remove unwanted information from the return value of the create method.
  console.log(JSON.stringify(Pikachu, null, 2));
  console.log(Pikachu);
}

main();
