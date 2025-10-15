import React from "react";
import * as S from "./productCardCarrito";
//import { useParams } from "react-router-dom";
//import { useState } from "react";

export default function ProductCardCarrito({ product }) {
    
    const restar = () =>{
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const existingProduct = carrito.find(p => String(p.id) === String(product.id));
      if(existingProduct){
      if(existingProduct.quantity > 0){existingProduct.quantity --;};  
      }if(existingProduct.quantity <= 0){
         carrito = carrito.filter(p => p.id !== product.id);
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.location.reload(); // Recargamos la página para ver los cambios
    };

    const sumar = () =>{
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const existingProduct = carrito.find(p => String(p.id) === String(product.id));
      if(existingProduct){
      existingProduct.quantity ++;  
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.location.reload(); // Recargamos la página para ver los cambios
    };

    const eliminar = () =>{
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const existingProduct = carrito.find(p => String(p.id) === String(product.id));
      if(existingProduct){
        existingProduct.quantity = 0;
        carrito = carrito.filter(p => p.id !== product.id ) 
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.location.reload(); // Recargamos la página para ver los cambios
    };
  
    return (
    <S.Card>
      <S.Img src={product.imagen} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title> 
        <S.botonesContador>
           <S.Button onClick={restar}>-</S.Button>
           <S.Contador>{product.quantity}</S.Contador>
           <S.Button onClick={sumar}>+</S.Button>
        </S.botonesContador>
      </S.Body>
      <S.DeleteButton onClick={eliminar}>Eliminar</S.DeleteButton>
    </S.Card>
  );
}
