const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress','root','1602671He@',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;