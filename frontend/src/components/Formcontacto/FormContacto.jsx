import React, { useState } from "react";
import * as S from "./FormContacto"
import { GlobalStyle } from "../DetalleProducto/detalleProducto";



export default function FormContacto(){
    const [form, setForm] = useState({nombre: "", email: "", mensaje:""});
    const [error, setError] = useState("");
    const [exito, setExito] = useState(false);

    const validar = () =>{
        if(!form.nombre.trim()) return "El nombre es obligatorio";
        if(!form.email.trim()) return "El email es obligarorio";
        if(!/\S+@\S+\.\S+/.test(form.email)) return "Email invalido";
        if(!form.mensaje.trim()) return "El mensaje es obligatorio";
        return "";
    };

    const handleSubmit = e =>{
        e.preventDefault();
        const mensaje = validar()
        if(mensaje){
            setError(mensaje);
            setExito(false);
        }else{
            setError("");
            setExito(true);
            setForm({nombre: "", email: "", mensaje:""})
            console.log({form});
        }
    };

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
        setError("");
        setExito(false);
    };

    return(
        <>
        <S.Container>
        <S.Info>
            <S.Titulo>
                Contactanos
            </S.Titulo>
            <S.Descripcion>
                Nuestros clientes suelen tener preguntas. Déjanos tus dudas y te responderemos lo antes posible.
            </S.Descripcion>
        </S.Info>
         <S.Form onSubmit={handleSubmit}> 
            <S.Label>
                Nombre:
                
            </S.Label>
            <S.Input onChange={handleChange} type="text" name="nombre" value={form.nombre} required />
            <S.Label>
                Email:
            </S.Label>
            <S.Input onChange={handleChange} type="email" name="email" value={form.email} required />
            <S.Label>
                Mensaje
            </S.Label>
            <S.TextArea name="mensaje" value={form.mensaje} onChange={handleChange} required />
            <S.Boton type="submit">Enviar</S.Boton>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {exito && <div style={{ color: "green" }}>Mensaje enviado con exito</div>}
         </S.Form>
        </S.Container>
        </>
    );
};