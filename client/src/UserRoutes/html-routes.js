// Requiring models
// ===============================================================================================
// var db = require("../models");
// var passport = require("../config/passport");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/Main", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/Main");
    }
    res.render("Main");
  });

  

};