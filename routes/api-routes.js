var db = require("../models");

module.exports = function(app){
    //routes go here
    app.get("/api/graph", function(req, res){

        db.Mood.findAll({}).then(function(data){
            res.json(data);
        });
    });


    app.post("/api/survey", function(req, res){

        db.Mood.create({
            anxiety: req.body.X,
            depression: req.body.X,
            concentration: req.body.X,
            energy: req.body.X,
            happiness: req.body.X,
            // usersssssss: XXXX            
        }).then(function(data){
            res.json(data);
        });
    });
};