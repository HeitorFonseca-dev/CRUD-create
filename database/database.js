const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress','root','123456He@',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;