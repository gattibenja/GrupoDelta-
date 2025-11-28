//import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/nav/Nav.jsx';
import Productos from '../../components/productos/Productos.jsx';
import Footer from '../../components/footer/Footer.jsx';
function Catalogo(){
    return(
        <>
        <Navbar/>
        <Productos/>
        <Footer/>
        </>
    )

}

export default Catalogo;


