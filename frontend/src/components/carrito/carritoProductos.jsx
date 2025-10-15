import { useState, useEffect } from "react";
import ProductCardCarrito from "../productCardCarrito/productCardCarrito.jsx";
import * as S from "./carritoProductos"
export default function CarritoProductos() {
    const [productos, setProductos] = useState([]);
   // const [cantidadProductos, setCantidadProductos] = useState(0);
    

    useEffect(() => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
        //const total = carrito.reduce((sum, product) => sum + product.quantity, 0)
        setProductos(carrito);
        //setCantidadProductos(total);
    }, []);

    return(
        <>
        <S.Container>
          <S.Title>Tu Carrito 🛒</S.Title>
            <S.productsContainer>{
            (productos.length > 0) ? 
            productos.map(p => <ProductCardCarrito key={p.id} product={p} />):
            <p>Tu carrito esta vacio</p>
            }
            </S.productsContainer>
          </S.Container>
        </>
    )
}