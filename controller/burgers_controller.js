// DEPENDENCIES
// Import Express and 'burger.js' models file;
const express = require("express");
// Create the router for the app
const router = express.Router();

// Import the model (burger.js) to use its database functions
const burger = require("../models/burger");

// Create all the routes and set up logic within those routes where required
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log("hbsObject", hbsObject);
    res.render("index, hbsObject");
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    (result) => {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.update(
    {
      burger_name: req.body.name,
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, do 404 error
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use
module.exports = router;
