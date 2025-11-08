import { useState, useEffect } from "react";
import ProductCardCarrito from "../productCardCarrito/productCardCarrito.jsx";
import * as S from "./carritoProductos"
export default function CarritoProductos() {
    const [productos, setProductos] = useState([]);
   // const [cantidadProductos, setCantidadProductos] = useState(0);
    

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

   

    useEffect(() => {
        setProductos(getCart());
    
            const onStorage = () => setProductos(getCart());
            window.addEventListener('carritoUpdated', onStorage); 
    
            return () => {
                window.removeEventListener('carritoUpdated', onStorage);
            }
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