import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        line-height: 1.8;
        }
    html{
    scroll-behavior: smooth;
    }
    body{
        transition: background-color 0.5s ease; 
    }
`;

export const Card = styled.section`
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: center;
    align-items: flex-start;
    background: #F5E6D3; /* Alabastro Cálido */
    border-radius: 1.2rem;
    box-shadow: 0 4px 24px rgba(160, 82, 45, 0.10);
    padding: 2.5rem 0.5rem;
    margin: 2.5rem auto;
    max-width: 850px;
    max-height: auto

`;

export const ImagenContainer = styled.div`

    flex: 1 1 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 12px rgba(212, 164, 55, 0.10);
    padding: 1.5rem;
    min-width: 260px;
    max-width: 340px;
`;

export const Imagen = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.7rem;
    object-fit: contain;
    box-shadow: 0 2px 8px rgba(196, 122, 109, 0.10);
`;

export const Detalles = styled.div`
   
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    font-family: 'Inter', sans-serif;
    color: #A0522D; /* Siena Tostado */
`;

export const Titulo = styled.h1`
   font-size: 2rem;
    font-weight: 700;
    color: #A0522D;
    margin-bottom: 0.5rem;

`;
export const Descripcion = styled.p`
   font-size: 1rem;
    color: background: #D4A437;;
    margin-bottom: 0.7rem;
    
`;
export const Lista = styled.ul`
   list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
    font-size: 0.95rem;
    color: #333;
   
`;

export const Propiedad = styled.strong`

 color: #D4A437; /* Vara de Oro */
    font-weight: 500;
`;


export const Item = styled.li`
    margin-bottom: 0.3rem;
`;
export const PrecioCarrito = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
    
    
`;
export const BotonAgregar = styled.button`
   background: #D4A437;
    color: #fff;
    border: none;
    border-radius: 0.7rem;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    box-shadow: 0 2px 8px rgba(212, 164, 55, 0.10);

    &:hover {
    background: #C47A6D; /* Rosa Polvoriento */
    color: #fff;
    transform: scale(1.04);
    
`;
export const Precio = styled.span`
    font-size: 1.3rem;
    font-weight: 400;
    color: #A0522D;
`;

export const BtnRegresarContainer = styled.div`
    width: 4.3rem;
    height: auto;
    margin-right: 35px;

`;
export const BtnRegresar = styled(NavLink)`
    border: none;
    border-radius: 0.7rem;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    width: 100%;
    height: 100%;

`;

export const ImagenBtnRegresar = styled.img`
    width: 100%;
    height: auto;
`;

