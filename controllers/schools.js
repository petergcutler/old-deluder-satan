var express = require('express');
var router = express.Router();
var DB = require('../config/connection');
var School = DB.models.School;

function error(response, message) {
  response.status(500);
  response.json({error: message});
}

router.get('/schools', function(req, res) {
  School.findAll().then(function(schools){
    res.json(schools);
  })
})

module.exports = router;
