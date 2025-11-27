import * as S from './nav.js'
import carritoImg from "../../assets/imagenes/carroCompra.png"
//import { useState, useEffect } from 'react'
import { AuthContext } from '../../auth/AuthContext.js';
import { CartContext } from '../../auth/cartContext.js';
import { useContext } from 'react'; // No necesitamos useState para el hover
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
const logo = `${BASE_URL}/imagenes/logo.svg`

function Navbar(){
    const { user, isAuthenticated, logout } = useContext(AuthContext)
    const {cartCount} = useContext(CartContext)

   
    return(
        <div>
            <S.Nav> 
                <S.Logo><S.LogoImg src={logo} alt="Logo"></S.LogoImg></S.Logo>
                <S.Lista>
                  <S.Links to="/" end className={({isActive}) => isActive? 'active':undefined}>Home</S.Links>  
                  <S.Links to="/catalogo" end className={({isActive}) => isActive? 'active':undefined}>Catalogo</S.Links>  
                  <S.Links to="/contacto" className={({isActive}) => isActive? 'active':undefined}>Contacto</S.Links> 
                  {isAuthenticated ? (
                    <S.UserMenuContainer>
                      <S.UserNameButton>{user?.user || 'Usuario'}</S.UserNameButton>
                      <S.DropdownMenu>
                        <S.DropdownItem to="/purchases">Mis compras</S.DropdownItem>
                        <S.DropdownItem to="/admin/crear-producto">Agregar Productos</S.DropdownItem>
                        <S.DropdownItem as="button" onClick={logout}>Salir</S.DropdownItem>
                      </S.DropdownMenu>
                    </S.UserMenuContainer>
                  ) : (
                    <>
                      <S.Links to="/user/login" className={({isActive}) => isActive? 'active':undefined}>Ingresa</S.Links>
                    </>
                  )}
                </S.Lista>
                <S.Links to={isAuthenticated ? "/carrito" : "/user/login"} className={({isActive}) => isActive? 'active':undefined}>
                  <S.contenedorCarrito>
                    <S.CarritoImg src={carritoImg}/>
                    {isAuthenticated? <S.productoCount>{cartCount}</S.productoCount>:null}
                  </S.contenedorCarrito> 
                </S.Links>
            </S.Nav> 
        </div>
    )
}

export default Navbar;