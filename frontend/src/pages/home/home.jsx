//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import Navbar from '../../components/nav/nav.jsx';
import Banner from '../../components/banner/banner.jsx'
import { createGlobalStyle } from 'styled-components';
import Footer from '../../components/footer/footer.jsx';
const GlobalStyle = createGlobalStyle`
    
body{
background-color: #F5E6D3;
}
`;

function Home(){
    

    return(
        <> 
        <GlobalStyle/>
        <div>
             <Navbar/>
             <Banner />
             <Footer/>
        </div>
        </> 
    )

}

export default Home;