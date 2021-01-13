// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const router = require("./controller/burgers_controller");

// Sets up an initial port that will be used later in our listener
const PORT = process.env.PORT || 8000;

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
const app = express();

// Serve the static content for the app from the "public" directory in the application directory
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// SET OUR VIEWS AND VIEW ENGINE
app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
// Configure express-handlebars as our view engine
app.set("view engine", "hbs");

// ROUTER
// The routes give our server a "map" of how to responds when users visit or request data from various URLs.
const routes = require("./controller/burgers_controller");
app.use(routes);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () =>
  console.log(`App now listening at http://localhost:${PORT}`)
);
