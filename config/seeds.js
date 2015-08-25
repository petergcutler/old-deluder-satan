var DB = require("./connection");
var User = DB.models.User;
var School = DB.models.School;
var HealthReport = DB.models.HealthReport;
var data = require("./cafeterias");

var schools = [];
var healthReports = [];
for (var i = 0; i < data.length; i++){
  name = data[i].name;
  address = data[i].address;
  criticals = parseInt(data[i].criticals);
  noncriticals = parseInt(data[i].noncriticals);
  riskcategory = parseInt(data[i].riskcategory);
  schools.push(
    { name: name,
      address: address});
  healthReports.push(
    { riskCategory: riskcategory,
      numberCritical: criticals,
      numberNoncritical: noncriticals,
      schoolId: i + 1
    });
    }

var users = [
  {username: "matt"},
  {username: "nayana"},
  {username: "peter"},
  {username: "karl"}
  ];


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
