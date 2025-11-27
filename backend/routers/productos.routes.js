const express = require('express')
const routerPeticiones = express.Router()
const postController = require('../controllers/post.controller.js')
const {authMiddleware} = require("../middlewares/authMiddleware.js")

routerPeticiones.post('/', authMiddleware, postController.createProduct);

routerPeticiones.post('/varios', authMiddleware, postController.createManyProducts);

routerPeticiones.get('/', postController.getProductos);

routerPeticiones.get('/:id', postController.getProductoById);

routerPeticiones.patch('/:id', authMiddleware, postController.updateProduct)

routerPeticiones.delete('/:id', authMiddleware, postController.deleteProductById)

module.exports = routerPeticiones;