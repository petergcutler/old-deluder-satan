var express = require('express');
var router = express.Router();
var DB = require('../config/connection');
var User = DB.models.User;

function error(response, message) {
  response.status(500);
  response.json({error: message});
}

// get - show (single user) - "/users/332"

// post - new - "users/new"

// patch/put - update - "/users/edit"

// delete - delete - "/users/delete"

router.get('/users', function(req, res) {
  User.findAll().then(function(users){
    res.json(users);
  })
})

module.exports = router;
