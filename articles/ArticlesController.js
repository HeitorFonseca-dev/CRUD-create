const express = require("express");
const router = express.Router();

router.get("/articles",(req,res)=>{
    res.send("ROTA DE ARTICLES")
});

router.get("/articles/new",(req,res)=>{
    res.send("NOVA ROTA DE ARTICLES")
});

module.exports = router;