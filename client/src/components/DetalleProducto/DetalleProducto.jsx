
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
const regresar = `${BASE_URL}/imagenes/regresar.png`;
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import * as S from "./detalleProducto.js"
import { AuthContext } from "../../auth/AuthContext.js";
import { CartContext } from "../../auth/CartContext.js";
//import { useToast } from "../../auth/ToastContext.js";


export default function DetalleProducto() {
    const { id }  = useParams();
    const { isAuthenticated} = useContext(AuthContext);
    const { addProduct } = useContext(CartContext);
    //const { addToast } = useToast();
    const navigate = useNavigate();
    const [producto, setProduct] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        fetch(`${BASE_URL}/api/productos/${id}`)
        .then(res => {
            if (!res.ok) throw new Error("Error cargando producto");
            return res.json();
        })
        .then(data =>{
            setProduct(data);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, [id]);
     

    const eliminar = async (e) =>{
        e.preventDefault()
        console.log("Producto a eliminar: ", producto)
        let confirmar = confirm("Desea eliminar el producto");
        if(confirmar){
            try{
            const response = await fetch(`${BASE_URL}/api/productos/${id}`, {
                method: 'DELETE',
                credentials: 'include' // Importante para que el navegador envíe la cookie
            })

            if(!response.ok){
                throw new Error('No se pudo eliminar el producto')
            }
            navigate('/catalogo', {replace: true})
            alert('Producto eliminado correctamente')
        }catch(err){
            console.error(err.message)
            setError(err.message)
            
        }
        }
        

    }
    if(loading) return <S.Card>Cargando....</S.Card>
    if(error) return <S.Card>Error: {error}</S.Card>
    if(!producto) return <S.Card>Producto no encontrado</S.Card>


   const urlFront = BASE_URL + producto.imagen 

    return (
        <div>
            <S.GlobalStyle/>
            <S.Card>
                <S.BtnRegresarContainer>
                    <S.BtnRegresar to="/catalogo">
                        <S.ImagenBtnRegresar src={regresar}/>
                    </S.BtnRegresar>
                </S.BtnRegresarContainer>
                  <S.ImagenContainer><S.Imagen  src={urlFront} alt={producto.nombre} ></S.Imagen> </S.ImagenContainer> 
                  <S.Detalles>
                    <S.Titulo>{producto.nombre}</S.Titulo>
                    <S.Descripcion>{producto.descripcion}</S.Descripcion>
                    <S.Lista> 
                        <S.Propiedad>Material:</S.Propiedad>
                        <S.Item>{(producto.materiales) ? producto.materiales:"N/A"}</S.Item>
                        <S.Propiedad>Medidas</S.Propiedad>
                        <S.Item>{(producto.medidas) ? producto.medidas:"N/A"}</S.Item>
                        <S.Propiedad>Acabado: </S.Propiedad>
                        <S.Item>{(producto.acabado) ? producto.acabado:"N/A"}</S.Item>
                        <S.Propiedad>Capacidades:</S.Propiedad>
                        <S.Item>{(producto.capacidades) ? producto.capacidades:"N/A"}</S.Item>
                        <S.Propiedad>Peso: </S.Propiedad>
                        <S.Item>{(producto.peso) ? producto.peso:"N/A"}</S.Item>
                        <S.Propiedad>Modulares:</S.Propiedad>
                        <S.Item>{(producto.modulares) ? producto.modulares:"N/A"}</S.Item>
                    </S.Lista>
                    <S.PrecioCarrito>
                        <S.Precio>${(producto.precio) ? producto.precio:"N/A"}</S.Precio>
                        <S.BotonAgregar onClick={() => addProduct(producto)}>Agregar al Carrito</S.BotonAgregar>
                        {isAuthenticated && (
                            <S.BotonAgregar onClick={eliminar}>Eliminar producto</S.BotonAgregar>
                        )}
                    </S.PrecioCarrito>
                  </S.Detalles>
                </S.Card>
        </div>
  );
}
