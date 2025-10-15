
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./detalleProducto.js"
import Navbar from "../nav/nav.jsx";
import Regresar from "../../assets/imagenes/regresar.png";
export default function DetalleProducto() {
    const { id }  = useParams();
    const [producto, setProduct] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`http://localhost:4000/api/productos/${id}`)
        .then(res => {
            if (!res.ok) throw new Error("Error cargando productos");
            return res.json();
        })
        .then(data =>{
            setProduct(data);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, [id]);
    
    if(loading) return <S.Card>Cargando....</S.Card>
    if(error) return <S.Card>Error: {error}</S.Card>
    if(!producto) return <S.Card>Producto no encontrado</S.Card>


    return (
        <div>
            <S.GlobalStyle/>
            <Navbar/>
            <S.Card>
                <S.BtnRegresarContainer>
                    <S.BtnRegresar to="/catalogo">
                        <S.ImagenBtnRegresar src={Regresar}/>
                    </S.BtnRegresar>
                </S.BtnRegresarContainer>
                  <S.ImagenContainer><S.Imagen  src={producto.imagen} alt={producto.nombre} ></S.Imagen> </S.ImagenContainer> 
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
                        <S.BotonAgregar>Agregar al Carrito</S.BotonAgregar>
                    </S.PrecioCarrito>
                  </S.Detalles>
                </S.Card>
        </div>
  );
}
