const express = require('express')
const routerPeticiones = express.Router()
const productController = require('../controllers/product.controller.js')
const {authMiddleware} = require("../middlewares/authMiddleware.js")

routerPeticiones.post('/', authMiddleware, productController.createProduct);

routerPeticiones.post('/varios', authMiddleware, productController.createManyProducts);

routerPeticiones.get('/', productController.getProductos);

routerPeticiones.get('/:id', productController.getProductoById);

routerPeticiones.patch('/:id', authMiddleware, productController.updateProduct)

routerPeticiones.delete('/:id', authMiddleware, productController.deleteProductById)

module.exports = routerPeticiones;