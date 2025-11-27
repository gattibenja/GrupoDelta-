import Navbar from '../../components/nav/nav.jsx';
import Footer from '../../components/footer/footer.jsx';
import FormCrearProducto from '../../components/formCrearProductos/formCrearProductos.jsx';
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