const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const slugify = require("slugify");
const Articles = require("./Article");

/*router.get("/articles/update",(req,res)=>{
    let id = req.id.body;
    let title = req.title.body;

    Articles.update({title:title,slug:slugify(title)}, {

        where:{
            id:id
        }
            
    }).then(() => {
        res.redirect("/admin/articles");
    })
});*/

router.get("/admin/articles", (req,res) => {
    res.render("admin/articles/index");
});

router.get("/admin/articles/new",(req,res)=>{
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories:categories});
    });    
});



router.post("/articles/save",(req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    Articles.create ({
        title: title,
        body: body,
        slug: slugify(title),
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    })

})

module.exports = router;