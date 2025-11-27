const express = require('express')
const cartRouter = express.Router()
const carts = require('../controllers/cart.controller')
const { authMiddleware } = require('../middlewares/authMiddleware')

cartRouter.post('/cart', authMiddleware, carts.cart)
cartRouter.get('/cart/get', authMiddleware, carts.getCart)
cartRouter.delete('/cart/deleteProductCart', authMiddleware, carts.deleteProductCart)
cartRouter.delete('/cart/deleteCart', authMiddleware, carts.deleteCart)


module.exports = cartRouter;