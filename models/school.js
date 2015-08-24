module.exports = function(sequelize, Sequelize){
  return sequelize.define("school", {
    name: Sequelize.STRING,
    address: Sequelize.STRING
  });
}
