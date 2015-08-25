var DB = require("./connection");
var User = DB.models.User;
var School = DB.models.School;
var HealthReport = DB.models.HealthReport;

var users = [
  {username: "matt"},
  {username: "nayana"},
  {username: "peter"},
  {username: "karl"}
];

var data = require("./cafeterias");

var schools = [];
var healthReports = [];
//
// for(i = 0; i < data.length; i++){
//     artist = artists[i];
//     songs = data.songs[artist.name];
//     for(s = 0; s < songs.length; s++){
//       song = songs[s];
//       school.healthId = school.id;
//       schools.push({name: name, address: address});
//       healthReport.push(healthReports);
//     }
//   }
//
//
//
//
// for (var i = 0; i < data.public.features.length; i++){
//   name = data.public.features[i].properties.NAME;
//   address = data.public.features[i].properties.ADDRESS;
//   enrollment = data.public.features[i].properties.TOTAL_STUD;
//   schools.push({name: name, address: address});
// }

// for (var i = 0; i < data.charter.features.length; i++){
//   name = data.charter.features[i].properties.NAME;
//   address = data.charter.features[i].properties.ADDRESS;
//   schools.push({name: name, address: address});
// }
//
// for (var i = 0; i < data.private.features.length; i++){
//   name = data.private.features[i].properties.NAME;
//   address = data.private.features[i].properties.ADDRESS;
//   schools.push({name: name, address: address});
// }

// var schools = [
//   {name: "Dunbar", address: "101 N St. NW"},
//   {name: "Wilson", address: "3950 Chesapeake St. NW"}
// ];

var healthReports = [
  {
    riskCategory: 3,
    numberCritical: 1,
    numberNoncritical: 2,
    dateInspected: "2/2/2014",
    reportUrl: "www.healthreports.com",
    schoolId: 1
  }
];


// School.bulkCreate(schools).then(function() {
//   User.bulkCreate(users).then(function() {
//     console.log("Users and schools seeded")
//     process.exit();
//   })

School.bulkCreate(schools).then(function() {
  console.log("Schools are seeded");
});

HealthReport.bulkCreate(healthReports).then(function() {
  console.log("Health Reports are seeded");
});

User.bulkCreate(users).then(function() {
  console.log("Users are seeded");
  process.exit();
});
