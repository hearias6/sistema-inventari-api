module.exports = app => {
    
    const clientes = require("../controllers/clientes.controller.js")

    var router = require("express").Router();
  
    router.post("/", clientes.create);
    router.get("/", clientes.findAll);
    router.get("/:id", clientes.findOne);
    router.put("/:id", clientes.update); 
    router.delete("/:id", clientes.delete); 
    app.use('/api/clientes', router);
  };