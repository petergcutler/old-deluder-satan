module.exports = function(sequelize, Sequelize){
  return sequelize.define("school", {
    risk_category: Sequelize.INTEGER,
    number_critical: Sequelize.INTEGER,
    number_noncritical: Sequelize.INTEGER,
    date_inspected: Sequelize.DATE,
    report_url: Sequelize.STRING,
  });
}
