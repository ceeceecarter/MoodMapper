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
            moodType: req.body.type,
            answer1: req.body.X,
            answer2: req.body.X,
            answer3: req.body.X,
            answer4: req.body.X,
            answer5: req.body.X,
            answer6: req.body.X,
            answer7: req.body.X,
            answer8: req.body.X,
            answer9: req.body.X,
            answer10: req.body.X,
            usersssssss: XXXX            
        }).then(function(data){
            res.json(data);
        });
    });
};