const { Sequelize } = require('sequelize')
const env = require('../utils/config')
const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
    dialect: 'mysql',
    host: env.DB_HOST
})
module.exports = sequelize
