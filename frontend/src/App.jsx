//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/nav/nav.jsx';
import Home from './pages/home/home.jsx';
import Contacto from './pages/contacto/contacto.jsx';
import Catalogo from './pages/catalogo/catalogo.jsx';
import Carrito from './pages/carrito/carrito.jsx';
import DetalleProducto from './components/DetalleProducto/DetalleProducto.jsx';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
        margin: 0;
        padding-top: 30px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;

    }
`;
function App() {

  return (
    <>
       <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:id" element={<DetalleProducto />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
    </>
  )
}

export default App
