const Sequelize =  require('sequelize');

const sequelize = new Sequelize('bibliadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
    define: {
        timestamps : false
    }
});
//exportar
module.exports = sequelize;