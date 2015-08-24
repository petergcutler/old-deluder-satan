var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres:///deluder');
var School = sequelize.import('../models/school');
var User = sequelize.import('../models/user');

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    School: School,
    User: User
  }
}
