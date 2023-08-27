const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Articles = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },slug:{
        type: Sequelize.STRING,
        allowNull:false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull:false
    }
});

Articles.belongsTo(Category);

module.exports = Category;