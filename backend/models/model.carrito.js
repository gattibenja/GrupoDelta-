const mongoose = require("mongoose");

  const CartSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
    unique: true 
  },
  items: [{
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Producto",
        required: true 
      },
    quantity: { 
        type: Number, 
        default: 1 
      },
    priceSnapshot: { 
        type: Number 
      }, // opcional: precio al agregar
    addedAt: { 
        type: Date, 
        default: Date.now 
      }
  }],
  updatedAt: { 
    type: Date, 
    default: Date.now }
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
