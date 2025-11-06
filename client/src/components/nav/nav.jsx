import * as S from './nav.js'
import carritoImg from "../../assets/imagenes/carroCompra.png"
import { useState, useEffect } from 'react'
const logo = 'http://localhost:4000/imagenes/logo.svg'

function Navbar(){
    const [productCount, setProductCount] = useState(0);

    const getCartCount = () => {
        const raw = localStorage.getItem('carrito');
        if(!raw) return 0;   
        try{
            const carrito = JSON.parse(raw);
            if (!Array.isArray(carrito)) return 0;
            return carrito.reduce((sum, it) => sum + it.quantity, 0);
        }catch(e){
            console.warn('carrito invalid JSON', e);
            return 0;
        }
    }



    useEffect(() =>{
        setProductCount(getCartCount());

        const onStorage = () => setProductCount(getCartCount());
        window.addEventListener('storage', onStorage);
        window.addEventListener('cartUpdated', onStorage); // evento custom en misma pestaña

        return () => {
            window.removeEventListener('storage', onStorage);
            window.removeEventListener('cartUpdated', onStorage);
        }

    }, [])

   
    return(
        <div>
            <S.Nav> 
                <S.Logo><S.LogoImg src={logo} alt="Logo"></S.LogoImg></S.Logo>
                <S.Lista>
                  <S.Links to="/" end className={({isActive}) => isActive? 'active':undefined}>Home</S.Links>  
                  <S.Links to="/catalogo" end className={({isActive}) => isActive? 'active':undefined}>Catalogo</S.Links>  
                  <S.Links to="/contacto" className={({isActive}) => isActive? 'active':undefined}>Contacto</S.Links> 
                  <S.Links to="/admin/crear-producto" className={({isActive}) => isActive? 'active':undefined}>Crear Producto</S.Links>
                </S.Lista>
                  <S.Links to="/carrito" className={({isActive}) => isActive? 'active':undefined}>
                  <S.contenedorCarrito>
                    <S.CarritoImg src={carritoImg}/>
                    <S.productoCount>{productCount}</S.productoCount>
                  </S.contenedorCarrito> 
                  </S.Links>
            </S.Nav> 
        </div>
    )
}

export default Navbar;