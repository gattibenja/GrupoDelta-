const express = require("express");
const peticionesRouter = express.Router();
const fs = require('fs/promises')
const path = require("path")
const createError = require("http-errors")

const filePath = path.join(__dirname, "../data/productos.json")

const readFile = async () => {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
}

peticionesRouter.get("/", async (req, res, next) =>{
    readFile()
    .then(data => res.json(data))
    .catch(err => next(createError(500, "Error al leer los productos")))
});

peticionesRouter.get("/:id", async(req, res, next) => {
    const id = parseInt(req.params.id);
    readFile()
    .then(productos => { 
            const producto = productos.find(p => p.id === id)
            if(!producto) return next(createError(404, "Producto seleccionado no encontrado"))
            res.json(producto);
    })
    .catch(err => next(createError(500, "Error al buscar a la mascota")))  
})

module.exports = {peticionesRouter};