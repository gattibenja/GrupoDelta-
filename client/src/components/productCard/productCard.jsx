//import React, { useState } from "react";
import * as S from "./productCard";
import {useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
import { AuthContext } from "../../auth/AuthContext";
import { useContext } from "react"; 
import { CartContext } from "../../auth/cartContext";

export default function ProductCard({ product }) {  
  const urlFront = BASE_URL + product.imagen;
  const navigate = useNavigate();
  const { isAuthenticated} = useContext(AuthContext);
  const {addProduct} = useContext(CartContext)
  
  return (
    <S.Card>
      <S.Img src={urlFront} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title>
        <S.Desc>{product.descripcion}</S.Desc>
        <S.Price>${product.precio}</S.Price>
        <S.Button onClick={isAuthenticated ? () => addProduct(product) : () => navigate("/user/login")}>Agregar al carrito</S.Button>
        <S.Button onClick={() => navigate(`/catalogo/${product.id}`)}>Ver mas informacion</S.Button>
      </S.Body>
    </S.Card>
  );
}
