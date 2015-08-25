var Sequelize = require("sequelize");
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: true
  });
} else {
  sequelize = new Sequelize('postgres:///deluder');
}


var School = sequelize.import('../models/school');
var User = sequelize.import('../models/user');
var HealthReport = sequelize.import('../models/healthreport');

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
};
