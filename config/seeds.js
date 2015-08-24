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

var healthReports = [
  {risk_category: 3,
    number_critical: 1,
    number_noncritical: 2,
    date_inspected: "2/2/2014",
    report_url: "www.healthreports.com",
    school_id: 1
  }
]


// School.bulkCreate(schools).then(function() {
//   User.bulkCreate(users).then(function() {
//     console.log("Users and schools seeded")
//     process.exit();
//   })

DB.models.School.bulkCreate(data.artists).done(function(){
  DB.models.Artist.findAll().done(function(artists){
    var a, artist, s, song, songs, output = [];
    for(a = 0; a < artists.length; a++){
      artist = artists[a];
      songs = data.songs[artist.name];
      for(s = 0; s < songs.length; s++){
        song = songs[s];
        song.artistId = artist.id;
        output.push(song);
      }
    }
    DB.models.Song.bulkCreate(output).done(function(){
      process.exit();
    })
  });
});

School.bulkCreate(schools).then(function() {
  console.log("Schools are seeded");
})

HealthReport.bulkCreate(healthReports).then(function() {
  console.log("Health Reports are seeded")
})

User.bulkCreate(users).then(function() {
  console.log("Users are seeded");
  process.exit();
});
