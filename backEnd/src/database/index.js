const sequelize = require('sequelize')

const db_name = 'gastos'
const db_user = 'root'
const db_pass = 'password'
const db_config = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
}

let db = {}

try {
    db = new sequelize(db_name, db_user, db_pass, db_config)
} catch (error) {
    console.error('Ocorreu algum erro!',error);
}

async function hasConnection(){
    try {
        await db.authenticate()
        console.log('Conectado');
    } catch (error) {
        console.error('Ocorreu algum erro no hasconnection!');
    }
}

Object.assign(db,{
    hasConnection
})

module.exports = db