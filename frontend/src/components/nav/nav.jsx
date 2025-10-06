//import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/imagenes/logo.svg'
import * as S from './nav'


function Navbar(){
   
    return(
        <div>
            <S.Nav> 
                <S.Logo><S.LogoImg src={logo} alt="Logo"></S.LogoImg></S.Logo>
                <S.Lista>
                  <S.Links to="/" end className={({isActive}) => isActive? 'active':undefined}>Home</S.Links>  
                  <S.Links to="/catalogo" end className={({isActive}) => isActive? 'active':undefined}>Catalogo</S.Links>  
                  <S.Links to="/contacto" className={({isActive}) => isActive? 'active':undefined}>Contacto</S.Links> 
                  <S.Links to="/carrito" className={({isActive}) => isActive? 'active':undefined}>CARRITO</S.Links>
                </S.Lista>
            </S.Nav> 
        </div>
    )
}

export default Navbar;