const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
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
    total: Number,
    createdAt: { 
        type: Date, 
        default: Date.now },
    status: { 
        type: String, 
        default: 'pending' }
}, {timestamps: true});

const Order =  mongoose.model('Order', orderSchema);

module.exports = Order;