const Cart = require('../models/model.carrito')
const mongoose = require('mongoose')

exports.cart = async (req, res, next) => {
    try {
    const userId = req.user.id; // desde middleware
    const { id, quantity } = req.body;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await Cart.create({ user: userId, items: [{ product: id, quantity }] });
    } else {
      const existing = cart.items.find(i => i.product.toString() === id.toString());
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.items.push({ product: id, quantity });
      }
      await cart.save();
    }
    
    const populated = await Cart.findById(cart._id).populate('items.product');
    res.json({ cart: populated });
    }catch(err){
            console.error("Error agregando al carrito: ", err.message);
            res.status(500).json({ error: 'Error agregando al carrito' });
    }
}

exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    //console.log("ID desde cookie JWT:", req.user.id);
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    
    if (!cart) {
        return res.json({ cart: { items: [] }})
    }

    const validItems = cart.items.filter(item => item.product !== null);

    if (validItems.length !== cart.items.length) {
      cart.items = validItems;
      await cart.save(); // Opcional pero recomendado: limpiar la DB de items inválidos
    }
    console.log("Carrito encontrado:", cart);
    res.json({ cart });
  } catch (err) {
    res.status(500).json({ error: 'Error obteniendo carrito' });
  }
};

exports.deleteProductCart = async (req, res, next) => {
    try{
        const userId = req.user.id;
        const productId = req.body.id
        
        const cart = await Cart.findOne({user: userId})
    
        if(!cart) {
            return next(new Error("No se encontro el carrito del usuario"));
        }
        cart.items = cart.items.filter(item => item.product.toString() !== productId.toString())
        await cart.save()

        const populatedCart = await Cart.findById(cart._id).populate('items.product');
        res.status(200).json({ message: 'Producto eliminado del carrito', cart: populatedCart });
    }catch(err){
        console.error("Error al eliminar el producto del carrito: ", err.message)
        res.status(500).json({error: err.message})
        
    }
} 

exports.deleteCart = async (req, res, next) =>{
  try{
      const userId = req.user.id;
      const deletedCart = await Cart.findOneAndDelete({user: userId});
      if(!deletedCart) {
        return res.status(404).json({ message: "No se encontró un carrito para eliminar." });
      }
      res.status(200).json({ message: "Carrito eliminado exitosamente." });
  }catch(err){
        next(err)
  }

}
