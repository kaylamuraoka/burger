// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm");

const burger = {
  // Code that will call the ORM functions using burger specific input for the ORM.
  all(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },
  create(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
  },
};

// Export the database functions for the controller 'burgers_controller.js'
module.exports = burger;
