import React, { useContext } from "react";
import * as S from "./productCardCarrito.js";
import { CartContext } from "../../auth/CartContext.js";

export default function ProductCardCarrito({ product, quantity }) {
      const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
      const urlFront = BASE_URL + product.imagen;
      const { addProduct, decrementProduct, removeProduct } = useContext(CartContext);
    
    return (
    <S.Card>
      <S.Img src={urlFront} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title> 
        <S.botonesContador>
           <S.Button onClick={() => decrementProduct(product._id)}>-</S.Button>
           <S.Contador>{quantity}</S.Contador>
           <S.Button onClick={() => addProduct(product)}>+</S.Button>
        </S.botonesContador>
      </S.Body>
      <S.DeleteButton onClick={() => removeProduct(product._id)}>Eliminar</S.DeleteButton>
    </S.Card>
  );
}
