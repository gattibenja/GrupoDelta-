import React from "react";
import * as S from "./productCardDestacados";

export default function ProductCard({ product }) {
  return (
    <S.Card>
      <S.Img src={product.imagen} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title> 
      </S.Body>
    </S.Card>
  );
}
