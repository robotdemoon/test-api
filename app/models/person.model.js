const {DataTypes} = require('sequelize')
const sequelize = require('../config/main.database')

const PersonModel = sequelize.define('person', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    age: DataTypes.INTEGER,
    names: DataTypes.STRING,
    father_last_name: DataTypes.STRING,
    mother_last_name: DataTypes.STRING,
    gender: DataTypes.ENUM('H','M'),
    rfc: DataTypes.STRING,
    curp: DataTypes.STRING,
    created_at: 'TIMESTAMP',
    updated_at: 'TIMESTAMP'
},{
    timestamps: false,
    tableName: 'people'
})

module.exports = PersonModel