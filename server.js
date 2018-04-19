// Require Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes');

//Bring in the models
const db = require("./models");


const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));


// app.use(routes);
// app.use("/tbd", routes);
// app.use("/tbd", routes);


// listen on port 3000
// const PORT = process.env.PORT || 3000;
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });


console.log(module.exports);
