var express = require('express');
var router = express.Router();
var DB = require('../config/connection');
var Comment = DB.models.Comment;

function error(response, message) {
  response.status(500);
  response.json({error: message});
}

router.get('/comments', function(req, res) {
  Comment.findAll().then(function(comments){
    res.json(comments);
  })
})

module.exports = router;
