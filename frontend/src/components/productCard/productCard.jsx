import React from "react";
import * as S from "./productCard";

export default function ProductCard({ product }) {
  return (
    <S.Card>
      <S.Img src={product.imagen} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title>
        <S.Desc>{product.descripcion}</S.Desc>
        <S.Price>${product.precio}</S.Price>
        <S.Button>Agregar al carrito</S.Button>
      </S.Body>
    </S.Card>
  );
}
