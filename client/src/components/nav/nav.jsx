import * as S from './nav.js'
//import { useState, useEffect } from 'react'
import { AuthContext } from '../../auth/AuthContext.js';
import { CartContext } from '../../auth/CartContext.js';
import { useContext, useState } from 'react'; // Importamos useState
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
const logo = `${BASE_URL}/imagenes/logo.svg`
const carritoImg = `${BASE_URL}/imagenes/carritoDecompra.png`

function Navbar(){
    const { user, isAuthenticated, logout } = useContext(AuthContext)
    const { cartCount } = useContext(CartContext)
    const [menuOpen, setMenuOpen] = useState(false);

   
    return(
        <div>
            <S.Nav> 
                <S.Logo><S.LogoImg src={logo} alt="Logo"></S.LogoImg></S.Logo>
                <S.Lista open={menuOpen}>
                  <S.Links to="/" end className={({isActive}) => isActive? 'active':undefined} onClick={() => setMenuOpen(false)}>Home</S.Links>  
                  <S.Links to="/catalogo" end className={({isActive}) => isActive? 'active':undefined} onClick={() => setMenuOpen(false)}>Catalogo</S.Links>  
                  <S.Links to="/contacto" className={({isActive}) => isActive? 'active':undefined} onClick={() => setMenuOpen(false)}>Contacto</S.Links> 
                </S.Lista>
                <S.ActionsContainer>
                    {isAuthenticated ? (
                        <S.UserMenuContainer>
                        <S.UserNameButton>{"Mi perfil"}</S.UserNameButton>
                        <S.DropdownMenu>
                            <S.DropdownUserName>{user?.user || 'Usuario'}</S.DropdownUserName>
                            <S.DropdownItem to="/purchases">Mis compras</S.DropdownItem>
                            <S.DropdownItem to="/admin/crear-producto">Agregar Productos</S.DropdownItem>
                            <S.DropdownItem as="button" onClick={logout}>Salir</S.DropdownItem>
                        </S.DropdownMenu>
                        </S.UserMenuContainer>
                    ) : (
                        <S.Links to="/user/login" className={({isActive}) => isActive? 'active':undefined}>Ingresa</S.Links>
                    )}
                    <S.Links to={isAuthenticated ? "/carrito" : "/user/login"} className={({isActive}) => isActive? 'active':undefined}>
                        <S.contenedorCarrito>
                            <S.CarritoImg src={carritoImg}/>
                            {isAuthenticated? <S.productoCount>{cartCount}</S.productoCount>:null}
                        </S.contenedorCarrito> 
                    </S.Links>
                    <S.HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
                        <div /> <div /> <div />
                    </S.HamburgerButton>
                </S.ActionsContainer>
            </S.Nav> 
        </div>
    )
}

export default Navbar;