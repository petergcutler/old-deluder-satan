var DB = require("./connection");
var User = DB.models.User;
var School = DB.models.School;
var HealthReport = DB.models.HealthReport;

console.log("see below");
console.log(data.schools.features[0].properties.NAME);
console.log(data.schools.features[0].properties.ADDRESS);
console.log("puppies");
// var schoolsArray = [];
//
// DB.models.School.bulkCreate(data.schools).done(function(){
//   DB.models.School.findAll().done(function(schools){
//     var s, school;
//     for(s = 0; s < schools.length; s++){
//       school = schools[s];
//       songs = data.songs[school.name];
//       name =    data.schools.features[s].properties[5]
//       asdfklsadfklafkl.adsfkafkasdkl
//       address = data.adsfklakafkkl.
//       schools.push({name: name, address: address})
//
//     }
//   });
// });

// // var DB = require('../config/connection');
//
//
// var users = [
//   {username: "matt"},
//   {username: "nayana"},
//   {username: "peter"},
//   {username: "karl"}
// ];
//
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
]


// School.bulkCreate(schools).then(function() {
//   User.bulkCreate(users).then(function() {
//     console.log("Users and schools seeded")
//     process.exit();
//   })

// DB.models.School.bulkCreate(data.artists).done(function(){
//   DB.models.Artist.findAll().done(function(artists){
//     var a, artist, s, song, songs, output = [];
//     for(a = 0; a < artists.length; a++){
//       artist = artists[a];
//       songs = data.songs[artist.name];
//       for(s = 0; s < songs.length; s++){
//         song = songs[s];
//         song.artistId = artist.id;
//         output.push(song);
//       }
//     }
//     DB.models.Song.bulkCreate(output).done(function(){
//       process.exit();
//     })
//   });
// });

// School.bulkCreate(schools).then(function() {
//   console.log("Schools are seeded");
// })
//
// HealthReport.bulkCreate(healthReports).then(function() {
//   console.log("Health Reports are seeded")
// })
//
// User.bulkCreate(users).then(function() {
//   console.log("Users are seeded");
//   process.exit();
// });
