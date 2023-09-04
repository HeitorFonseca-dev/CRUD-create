const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Articles = connection.define('article',{
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

//Articles.sync({force:true});

Category.hasMany(Articles); //Uma categoria tem muitos artigos
Articles.belongsTo(Category); //Um artigo pertence a uma categoria

module.exports = Articles;