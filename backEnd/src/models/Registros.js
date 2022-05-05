const db = require('../database')
const { DataTypes } = require('sequelize')

const Registros = db.define('Registros',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date:{
        type: DataTypes.STRING,
    },
    category:{
        type: DataTypes.STRING
    },
    title:{
        type: DataTypes.STRING
    },
    value:{
        type: DataTypes.FLOAT
    }
},{
    tableName: 'registros',
    timestamps: false
})

module.exports = Registros