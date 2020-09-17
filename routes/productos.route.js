module.exports = app => {
    
    const productos = require("../controllers/productos.controller.js")

    var router = require("express").Router();
  
    router.post("/", productos.create);
    router.get("/", productos.findAll);
    router.get("/:id", productos.findOne);
    router.put("/:id", productos.update); 
    router.delete("/:id", productos.delete); 
    app.use('/api/productos', router);
  };