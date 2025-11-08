import React from "react";
import * as S from "./productCardCarrito";
//import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductCardCarrito({ product }) {
      const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
      const urlFront = BASE_URL + product.imagen;


      const getCart = () => {
        const raw = localStorage.getItem('carrito');
        if(!raw) return 0;   
        try{
            const carrito = JSON.parse(raw);
            if (!Array.isArray(carrito)) return 0;
            return JSON.parse(localStorage.getItem("carrito")) || [];
        }catch(e){
            console.warn('carrito invalid JSON', e);
            return 0;
        }
    }
      
      let carrito = getCart()
      const existingProduct = (carrito.find(p => String(p.id) === String(product.id))) || {};
      const [cantidad, setCantidad] = useState(existingProduct.quantity || 0);
      
     

      

    const restar = () =>{
      let carrito = getCart()
      const existingProduct = carrito.find(p => String(p.id) === String(product.id));
      if(existingProduct){
      if(existingProduct.quantity > 0){
        existingProduct.quantity --;
        }
      }else{
        return console.error("No existe el producto en el carrito");
      }
        if(existingProduct.quantity <= 0){
         carrito = carrito.filter(p => String(p.id) !== String(product.id));
         localStorage.setItem("carrito", JSON.stringify(carrito));
         window.dispatchEvent(new Event("cartUpdated"));
         window.dispatchEvent(new Event("carritoUpdated"));  
         return 
      }

       localStorage.setItem("carrito", JSON.stringify(carrito));
       setCantidad(existingProduct.quantity)
       window.dispatchEvent(new Event("cartUpdated"));
       window.dispatchEvent(new Event("carritoUpdated"));
      
    };

    const sumar = () =>{
      let carrito = getCart()
      const existingProduct = carrito.find(p => String(p.id) === String(product.id));
      if(existingProduct){
      existingProduct.quantity ++;  
      }else{
        return console.error("No existe el producto en el carrito")
      }
       localStorage.setItem("carrito", JSON.stringify(carrito));
       setCantidad(existingProduct.quantity)
       window.dispatchEvent(new Event("cartUpdated"));
       window.dispatchEvent(new Event("carritoUpdated"));
      
    };

    const eliminar = () =>{
      let carrito = getCart()
      const existingProduct = carrito.find(p => String(p.id) === String(product.id));
      if(existingProduct){
        existingProduct.quantity = 0;
        carrito = carrito.filter(p => p.id !== product.id ) 
      }else{
        console.error("No existe el producto en el carrito")
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.dispatchEvent(new Event("cartUpdated"));
      window.dispatchEvent(new Event("carritoUpdated"));
    };
    
    return (
    <S.Card>
      <S.Img src={urlFront} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title> 
        <S.botonesContador>
           <S.Button onClick={restar}>-</S.Button>
           <S.Contador>{cantidad}</S.Contador>
           <S.Button onClick={sumar}>+</S.Button>
        </S.botonesContador>
      </S.Body>
      <S.DeleteButton onClick={eliminar}>Eliminar</S.DeleteButton>
    </S.Card>
  );
}
