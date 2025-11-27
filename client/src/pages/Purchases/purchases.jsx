//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import Navbar from '../../components/nav/nav.jsx';
import PurchasesComp from '../../components/purchases/purchases.jsx';
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