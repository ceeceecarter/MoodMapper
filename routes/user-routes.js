// Requiring models
// ===============================================================================================
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    app.post("/api/login", passport.authentication("local"), 
function (req, res) {

    //I think this will return profile page after user logs in? Not sure.
    res.json("/Profile");
});


//Create new user
app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(function() {
        res.redirect(307, "/api/login");
    }).catch(function(err) {
        console.log(err);
        res.json(err);
    });
});

//Logout 
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
});









}