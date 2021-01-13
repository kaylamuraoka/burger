// DEPENDENCIES
// Import Express and 'burger.js' models file;
const express = require("express");
// Create the router for the app
const router = express.Router();

// Import the model (burger.js) to use its database functions
const burger = require("../models/burger");

// Create all the routes and set up logic within those routes where required
// Create the router for the app, and export the router at the end of your file.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log("hbsObject", hbsObject);
    res.render("index", hbsObject);
  });
});
// Add new burger to the db.
router.post("/api/burgers", (req, res) => {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});
// Set burger devoured status to true.
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.update({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, do 404 error
      return res.status(404).end();
    }
    res.status(200).end();
  });
});
// Delete burger from db.
router.delete("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.delete(condition, (result) => {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404.
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use
module.exports = router;
