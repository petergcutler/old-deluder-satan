var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres:///deluder');
var School = sequelize.import('../models/school');
var User = sequelize.import('../models/user');
var HealthReport = sequelize.import('../models/healthReport');

HealthReport.belongsTo(School);
School.hasOne(HealthReport);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    School: School,
    User: User,
    HealthReport: HealthReport
  }
}
