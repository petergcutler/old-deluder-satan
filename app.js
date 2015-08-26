var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport')
var Strategy = require('passport-local').Strategy
var bcrypt = require('bcrypt-nodejs')

app.use(expressSession({
  secret: 'deluder',
  resave: false,
  saveUninitialized: false
}))
app.use(function(req, res, callback){
  if(req.user){
    res.locals.currentUser = req.user.username
  }
})
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/assets", express.static(path.join(__dirname + "/assets")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

passport.use(new Strategy(function(username, password, callback){
  var hashedPass = bcrypt.hashSync(password)
  User.findOne({
    where: {
      username: username
    }
  }).then(function(user, err){
    if (err) { return callback(err); }
    if (!user) {
      return callback(null, false);
    }
    return callback(null, user);
  })
}))

passport.serializeUser(function(user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback){
  User.findById(id).then(function(user){
    callback(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  if(req.user){
    res.locals.user = req.user.username
  }
  next()
})

var schoolsController = require('./controllers/schools');
var usersController = require('./controllers/users');
var healthReportsController = require('./controllers/healthReports')
var commentsController = require('./controllers/comments')


app.get('/', function(req, res) {
  res.render("index")
})

app.use('/', schoolsController);
app.use('/', usersController);
app.use('/', healthReportsController);
app.use('/', commentsController);

app.listen(4000, function() {
  console.log("Listening on port 4000");
})
