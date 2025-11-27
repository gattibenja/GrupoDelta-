const express = require('express')
const orderRouter = express.Router()
const orders = require('../controllers/order.controller')
const { authMiddleware } = require('../middlewares/authMiddleware')

orderRouter.post('/createOrder', authMiddleware, orders.createOrder)
orderRouter.get('/getOrders', authMiddleware, orders.getOrders)

module.exports = orderRouter