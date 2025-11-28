//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import Navbar from '../../components/nav/Nav.jsx';
import PurchasesComp from '../../components/purchases/Purchases.jsx';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    
body{
background-color: #F5E6D3;
}
`;

function Purchases(){
    

    return(
        <> 
        <GlobalStyle/>
        <div>
             <Navbar/>
             <PurchasesComp/>
        </div>
        </> 
    )

}

export default Purchases;