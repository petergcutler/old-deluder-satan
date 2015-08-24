var DB = require('../config/connection');
var User = DB.models.User;
var School = DB.models.School;

var users = [
  {name: "matt"},
  {name: "nayana"},
  {name: "peter"},
  {name: "karl"}
]

var schools = [
  {name: "Dunbar", address: "101 N St. NW"},
  {name: "Wilson", address: "3950 Chesapeake St. NW"}
]

School.bulkCreate(schools).then(function() {
  console.log("Schools seeded");
  process.exit();
})
