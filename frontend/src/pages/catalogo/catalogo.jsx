//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import Navbar from '../../components/nav/nav.jsx';
import Productos from '../../components/productos/productos.jsx';
import Footer from '../../components/footer/footer.jsx';
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