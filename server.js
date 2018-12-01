// Server.js Variables
// ################################ //
var express = require("express");
// Handlebar req
var exphbs = require("express-handlebars");
// Defines PORT
var PORT = process.env.PORT || 8080;
// Passes express through the variable 'app'
var app = express();
// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");
// ################################ //
// Express Parsing
// ################################ //
// This allows the static languages like CSS/JS/HTML to pass through using express parsing data
app.use(express.static(__dirname + "/public"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ################################ //
// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);
// ################################ //
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log("Server PORT on : http://localhost:" + PORT);
});
// ################################ //
// End of Server.js
// ################################ //

