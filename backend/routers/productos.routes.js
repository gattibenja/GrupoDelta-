const express = require('express')
const routerPeticiones = express.Router()
const postController = require('../controllers/post.controller.js')


routerPeticiones.post('/', postController.createProduct);

routerPeticiones.post('/varios', postController.createManyProducts);

routerPeticiones.get('/', postController.getProductos);

routerPeticiones.get('/:id', postController.getProductoById);

routerPeticiones.patch('/:id', postController.updateProduct)

routerPeticiones.delete('/:id', postController.deleteProductById)

module.exports = routerPeticiones;