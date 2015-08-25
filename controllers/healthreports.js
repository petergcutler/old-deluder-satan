var express = require('express');
var router = express.Router();
var DB = require('../config/connection');
var HealthReport = DB.models.HealthReport;

function error(response, message) {
  response.status(500);
  response.json({error: message});
}

// PRIMARY ROUTES //

// get - show (individual health report)
// displayed via Ajax on schools show page
// (a la "/schools/434/healtreport/1")


// SECONDARY ROUTES //

// post - create school - this would be post-MVP
// using an automated scraper or something

// delete and patch/put, same thing possibly


// router.get('/schools', function(req, res) {
//   School.findAll().then(function(schools){
//     res.json(schools);
//   })
// })



module.exports = router;
