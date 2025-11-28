import React, { useEffect, useState } from "react";
import * as S from './productos.js'
import ProductCard from '../productCard/ProductCard.jsx';
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
function Productos(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/api/productos`)
        .then(res => {
            if (!res.ok) throw new Error("Error cargando productos");
            return res.json()
        })
        .then(data => {
            setProducts(data);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, []);

    if(loading) return <S.Destacados>Cargando productos...</S.Destacados>;
    if(error) return   <S.Destacados>Error: {error}</S.Destacados>

    return(
        <div>
            <S.Destacados >
                    <S.Title>Catalogo de Productos</S.Title>
                    <S.Grid> 
                        {products.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </S.Grid>
            </S.Destacados>
        </div>
    )
  }
export default Productos;