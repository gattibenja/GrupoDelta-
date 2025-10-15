//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import Navbar from '../../components/nav/nav.jsx';
import Footer from '../../components/footer/footer.jsx';
import FormContacto from '../../components/Formcontacto/FormContacto.jsx';
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
     <div>
     <Navbar/>  
     <FormContacto/>
     <Footer/>   
     </div>
     </>
    )

}

export default Contacto;