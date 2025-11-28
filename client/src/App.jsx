
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Contacto from './pages/contacto/contacto.jsx';
import Catalogo from './pages/catalogo/Catalogo.jsx';
import Carrito from './pages/carrito/Carrito.jsx';
import DetalleProducto from './components/DetalleProducto/DetalleProducto.jsx';
import { createGlobalStyle } from 'styled-components';
import CrearProducto from './pages/createProduct/CreateProduct.jsx';
import User from './pages/user/User.jsx'; 
import Navbar from './components/nav/Nav.jsx';
import Purchases from './pages/Purchases/Purchases.jsx';
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
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<User />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:id" element={<DetalleProducto />} />
          <Route path="/contacto" element={<Contacto />} /> 
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin/crear-producto" element={<CrearProducto />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
    </>
  )
}

export default App
