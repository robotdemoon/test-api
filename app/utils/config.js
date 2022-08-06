const path = require('path')
const data = require('dotenv').config({
    path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`)
})

module.exports = {
    PORT: process.env.PORT || 8080,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'user',
    DB_PASS: process.env.DB_PASS || 'password',
    DB_NAME: process.env.DB_NAME || 'db'
}