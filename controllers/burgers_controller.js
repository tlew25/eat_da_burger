// Burgers_controller.js Variables
// ############################# //
var express = require("express");
var router = express.Router();
var burger= require("../models/burger.js");
// ############################# //
// Controls the front-end functionality by extracting index.handlebars/main.handlebars

// ############################# //
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers/", function(req, res) {
    // console.log("");
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // console.log("controller test");
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    var isNewBurgerTrue = false;
    if (req.body.devoured === "true") isNewBurgerTrue = true;
    burger.update({
      devoured: !isNewBurgerTrue
    }, condition, function(result) {
      // console.log("test update");
      // console.log(result)
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  module.exports = router;