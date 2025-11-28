import Navbar from '../../components/nav/Nav.jsx';
import Footer from '../../components/footer/Footer.jsx';
import FormCrearProducto from '../../components/formCrearProductos/FormCrearProductos.jsx';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    
body{
background-color: #F5E6D3;
}
`;

function CrearProducto(){
    return(
        <>
        <GlobalStyle/>
        <Navbar/>
        <FormCrearProducto/>
        <Footer/>
        </>
    )

}
export default CrearProducto;