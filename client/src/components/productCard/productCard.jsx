//import React, { useState } from "react";
import * as S from "./productCard";
import {useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
export default function ProductCard({ product }) {
  
  
  const urlFront = BASE_URL + product.imagen;
  const navigate = useNavigate();
  const addProduct = () =>{
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const existingProduct = carrito.find(p => String(p.id) === String(product.id));
      if(existingProduct){
        existingProduct.quantity += 1;
      }else{
        carrito.push({...product, quantity: 1});
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.dispatchEvent(new Event('cartUpdated')); // notifica a Navbar en la misma pestaña
      console.log("Product Succesfully saved");
      console.log(localStorage.getItem("carrito"))
      alert("Producto agregado al carrito")
    };


  return (
    <S.Card>
      <S.Img src={urlFront} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title>
        <S.Desc>{product.descripcion}</S.Desc>
        <S.Price>${product.precio}</S.Price>
        <S.Button onClick={addProduct}>Agregar al carrito</S.Button>
        <S.Button onClick={() => navigate(`/catalogo/${product.id}`)}>Ver mas informacion</S.Button>
      </S.Body>
    </S.Card>
  );
}
