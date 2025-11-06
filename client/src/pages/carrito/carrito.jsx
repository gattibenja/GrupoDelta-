//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import Navbar from '../../components/nav/nav.jsx';
import CarritoProductos from '../../components/carrito/carritoProductos.jsx';             
import Footer from '../../components/footer/footer.jsx'; 
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    
body{
background-color: #F5E6D3;
}
`;

function Contacto(){
    return(
        <>
            <GlobalStyle/>
            <Navbar/>
            <CarritoProductos/>
            <Footer/>
        </>
    )

}

export default Contacto;