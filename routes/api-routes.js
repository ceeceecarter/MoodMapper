var db = require("../models");
// var axios = require("axios");

module.exports = function(app){
    //routes go here
    app.get("/api/graph", function(req, res){
        console.log('HERE', req)
        db.Mood.findAll({}).then(function(data){
            return res.json(data);
        });
    });


    // app.post("/api/survey", function(req, res){

    //     db.Mood.create({
    //         anxiety: req.body.id.type,
    //         depression: req.body.id.type,
    //         concentration: req.body.id.type,
    //         energy: req.body.id.type,
    //         sleep: req.body.id.type,
    //         // usersssssss: XXXX            
    //     }).then(function(data){
    //         res.json(data);
    //     });
    // });
};