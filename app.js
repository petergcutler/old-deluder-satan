var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/assets", express.static(path.join(__dirname + "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

var schoolsController = require('./controllers/schools');
var usersController = require('./controllers/users');

var healthReportsController = require('./controllers/healthreports');
var commentsController = require('./controllers/comments');

app.get('/', function(req, res) {
  res.render("index");
});

app.use('/', schoolsController);
app.use('/', usersController);
app.use('/', healthReportsController);
app.use('/', commentsController);

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), function() {
  console.log("Listening on port 4000");
});
