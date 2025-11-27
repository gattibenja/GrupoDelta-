import { useState} from "react";
//import { useNavigate } from "react-router-dom";
import * as S from './FormCrearProducto'

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export default function FormCrearProducto() {
    const [formData, setFormData] = useState({
      id: "",
      nombre: "",
      descripcion: "",
      medidas: "",
      materiales: "",
      acabado: "",
      almacenamiento: "",
      cables: "",
      precio: "",
      imagen: ""
    });
    //const navigate = useNavigate();
    const [error, setError] = useState("");
    const [exito, setExito] = useState(false);

    

    const validar = () =>{
        if(!Number.isInteger(formData.id) || formData.id < 0) {return "El id debe ser un numero positivo"}
        if(!Number.isInteger(formData.precio) || formData.precio < 0) {return "El precio debe ser un numero positivo"}
        return "";
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const mensaje = validar()
        if(mensaje){
            setError(mensaje)
            setExito(false)
        }
        console.log("Datos a enviar: ", formData)
        try{
            const response = await fetch(`${BASE_URL}/api/productos/`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(formData)
            });
            if(!response.ok){
                throw new Error('La creacion del producto fallo.')
            }
            //navigate(`http://localhost:4000/api/productos/${formData.id}`, {replace: true})
            setFormData(
                {
                 id: "",
                 nombre: "",
                 descripcion: "",
                 medidas: "",
                 materiales: "",
                 acabado: "",
                 almacenamiento: "",
                 cables: "",
                 precio: "",
                 imagen: ""
            }
            )
            
            setExito(true);
            setError("")

        }catch(err){
            console.error(err.message)
            setError(err.message)
            setExito(false)
        }
        
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        setExito(false)
        setError("");
    }
   
    return(
        <>
        <S.Container>
           <S.Titulo>Crea un nuevo producto</S.Titulo>
            <S.Form onSubmit={handleSubmit}>
                <S.Label>Id:</S.Label>
                <S.Input type="number" name="id" value={formData.id} required onChange={handleChange}/>
                <S.Label>Nombre :</S.Label>
                <S.Input type="text" name="nombre" value={formData.nombre} required onChange={handleChange}/>
                <S.Label>Descripcion:</S.Label>
                <S.Input type="text" name="descripcion" value={formData.descripcion} required onChange={handleChange}/>
                <S.Label>Medidas:</S.Label>
                <S.Input type="text" name="medidas" value={formData.medidas} required onChange={handleChange}/>
                <S.Label>Materiales:</S.Label>
                <S.Input type="text" name="materiales" value={formData.materiales} required onChange={handleChange}/>
                <S.Label>Precio:</S.Label>
                <S.Input type="number" name="precio" value={formData.precio} required onChange={handleChange}/>
                <S.Label>Url imagen:</S.Label>
                <S.Input type="text" name="imagen" value={formData.imagen} required onChange={handleChange}/>
                {error && <div style={{ color: "red" }}>{error}</div>}
                {exito && <div style={{ color: "green" }}>Producto creado con exito</div>}
                <S.Boton type="submit">crear</S.Boton>
            </S.Form>
        </S.Container>
        </>
    );
};
