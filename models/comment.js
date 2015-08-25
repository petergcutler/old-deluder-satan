module.exports = function(sequelize, Sequelize) {
  return sequelize.define("comment", {
    body: Sequelize.TEXT
  })
}
