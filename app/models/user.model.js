const {DataTypes} = require('sequelize')
const sequelize = require('../config/main.database')

const UserModel = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    person_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'people',
            key: 'id'
        }
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    access_token: DataTypes.STRING,
    created_at: 'TIMESTAMP',
    updated_at: 'TIMESTAMP'
},{
    timestamps: false
})

module.exports = UserModel