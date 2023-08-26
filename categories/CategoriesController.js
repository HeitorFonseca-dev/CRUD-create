const express = require("express");
const router = express.Router();

router.get("/categories",(req,res)=>{
    res.send("ROTA DE CATEGORIAS")
});

router.get("/categories/new",(req,res)=>{
    res.send("NOVA ROTA DE CATEGORIAS")
});

module.exports = router;