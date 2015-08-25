module.exports = function(sequelize, Sequelize){
  return sequelize.define("healthreport", {
    riskCategory: Sequelize.INTEGER,
    numberCritical: Sequelize.INTEGER,
    numberNoncritical: Sequelize.INTEGER
  });
};
