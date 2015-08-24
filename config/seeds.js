var DB = require('../config/connection');
var User = DB.models.User;
var School = DB.models.School;

var users = [
  {username: "matt"},
  {username: "nayana"},
  {username: "peter"},
  {username: "karl"}
];

var schools = [
  {name: "Dunbar", address: "101 N St. NW"},
  {name: "Wilson", address: "3950 Chesapeake St. NW"}
];


// School.bulkCreate(schools).then(function() {
//   User.bulkCreate(users).then(function() {
//     console.log("Users and schools seeded")
//     process.exit();
//   })

School.bulkCreate(schools).then(function() {
  console.log("Schools are seeded");
  // process.exit();
})

User.bulkCreate(users).then(function() {
  console.log("Users are seeded");
  process.exit();
});
