const Order = require('../models/model.order');
const Cart = require('../models/model.carrito');



exports.createOrder = async (req, res, next) => {
    try{
        const userId = req.user.id;
        let cart = await Cart.findOne({user: userId}).populate({
          path: 'items.product',
          select: 'nombre precio'
        })

        if(!cart) return res.status(500).json({error: "No se encontro el carrito para confirmar la orden"})
        let products = cart.items || []
        console.log("Los productos son: ",products)
        if(!products){ 
          return res.json([]);
      }
        const orderItems = products.map(item => ({
          product: item.product._id, 
          quantity: item.quantity
        }));

        const newOrder = new Order(
      {
        user: userId,
        items: orderItems 
      })
        const savedOrder = await newOrder.save()
        res.status(200).json({"Pedido creado con exito: ": savedOrder})
  
    }catch(err){
      res.status(500).json({"Error al enviar pedido:": err.message})
    }
}


exports.getOrders = async (req, res, next) => {
    try{
      const userId = req.user.id;
      const purchases = await Order.find({ user: userId }).sort({ createdAt: -1 }).populate({
        path: 'items.product',
        select: 'nombre precio'
      });
      
      res.status(200).json({ purchases });
    }catch(err){
      next(err);
    }
}































/*exports.confirmCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart || cart.items.length === 0) return res.status(400).json({ error: 'Carrito vacío' });

    // calcular total y crear items con precio actual
    const itemsForOrder = cart.items.map(i => ({
      product: i.product._id,
      qty: i.qty,
      priceAtPurchase: i.product.price
    }));
    const total = itemsForOrder.reduce((s, it) => s + it.qty * it.priceAtPurchase, 0);

    const order = await Order.create({
      user: userId,
      items: itemsForOrder,
      total,
      status: 'confirmed'
    });

    // Vaciar carrito
    cart.items = [];
    await cart.save();

    const populatedOrder = await Order.findById(order._id).populate('items.product');
    res.json({ order: populatedOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error confirmando pedido' });
  }
};


exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId }).sort('-createdAt').populate('items.product');
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ error: 'Error obteniendo pedidos' });
  }
};
*/