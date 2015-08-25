var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname + "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

var schoolsController = require('./controllers/schools');
var usersController = require('./controllers/users');
var healthReportsController = require('./controllers/healthReports')

app.get('/', function(req, res) {
  res.render("index")
})

app.use('/', schoolsController);
app.use('/', usersController);
app.use('/', healthReportsController);

app.listen(4000, function() {
  console.log("Listening on port 4000");
})
