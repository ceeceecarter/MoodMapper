// Require Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
// const routes = require('./routes');;
// const routes = require("./routes/api-routes.js")
const path = require('path');
const PORT = process.env.PORT || 3001;

//Bring in the models
const db = require("./models");


const app = express();
// Serve static content for the app from the "public" directory in the application directory.

app.use('/', express.static(`${__dirname}/public`));
// app.use(express.static("client/build"));
// app.use(express.static("public"));



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));


// app.use(routes);
// console.log('ROUTES', app)
// app.use("/api/graph", routes);
// console.log(app)
// app.use("/tbd", routes);
// require("./routes/api-routes.js")(app);
require("./routes")(app);

// listen on port 8000
// const PORT = process.env.PORT || 3306;

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// app.listen(PORT, function() {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });
// console.log(module.exports);
