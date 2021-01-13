// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm");

const burger = {
  // Code that will call the ORM functions using burger specific input for the ORM.
  // Display all burgers in the db.
  all(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },
  // Add a new burger to the db.
  create(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => cb(res));
  },
  // Change the devoured status to true.
  update(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
  },
  // Delete a burger from the db.
  delete(condition, cb) {
    orm.deleteOne("burgers", condition, (res) => cb(res));
  },
};

// Export the database functions for the controller 'burgers_controller.js'
module.exports = burger;
