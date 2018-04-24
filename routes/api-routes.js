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
            anxiety: req.body.id.type,
            depression: req.body.id.type,
            concentration: req.body.id.type,
            energy: req.body.id.type,
            happiness: req.body.id.type,
            // usersssssss: XXXX            
        }).then(function(data){
            res.json(data);
        });
    });
};