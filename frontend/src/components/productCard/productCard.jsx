//import React, { useState } from "react";
import * as S from "./productCard";
import {useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  //const [contador, setContador] = useState(0);
  
  
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
      console.log("Product Succesfully saved");
      console.log(localStorage.getItem("carrito"))
      alert("Producto agregado al carrito")
    };


  return (
    <S.Card>
      <S.Img src={product.imagen} alt={product.nombre} />
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
