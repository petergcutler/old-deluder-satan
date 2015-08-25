var express = require('express');
var router = express.Router();
var DB = require('../config/connection');
var School = DB.models.School;

function error(response, message) {
  response.status(500);
  response.json({error: message});
}

// PRIMARY ROUTES //

// get - index (all schools) - "/"

// get - show (individual school) - "/schools/456"


// SECONDARY ROUTES //

// post - create school - this would be post-MVP
// using an automated scraper or something

// delete and patch/put, same thing possibly


router.get('/schools', function(req, res) {
  School.findAll().then(function(schools){
    res.json(schools);
  })
})

// router.get("/schools/:id", function(req, res){
//   Artist.findById(req.params.id).then(function(school){
//     if(!school) return error(res, "not found");
//     res.json(school);
//   });
// });

router.get("/schools/:id", function(req, res){
  School.findById(req.params.id).then(function(school){
    if(!school) return error(res, "not found");
    school.getHealthReports().then(function(healthreports){
      res.send(healthreports);
    });
  });
});

// getHealthReports does not exist yet.

module.exports = router;
