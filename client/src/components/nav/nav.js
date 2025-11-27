import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background-color: #F5E6D3;
    filter: drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.5));
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 3rem;
    padding-right: 4rem;
    position: fixed; 
    top: 0; 
    z-index: 1000; 
    border-bottom: 3px solid #D4A437;
`;

export const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 15px;
    text-decoration: none;
    list-style-type: none;
`;

export const Links = styled(NavLink)`
    text-decoration: none;
    color:  #333;
    margin: 0 1rem;
    font-size: 0.80rem;
    transition: all 0.2s ease-in-out;
    display: flex; /* Clave: para centrar el contenido verticalmente */
    align-items: center; /* Clave: para centrar el contenido verticalmente */
    padding-bottom: 4px; /* Pequeño espacio para que la línea no esté pegada */
    border-bottom: 1px solid transparent; /* Borde invisible por defecto */

    &:hover, &.active{
     text-decoration: none;
     transform: scale(1.05);
     color: #D4A437;
     border-bottom-color: #D4A437; /* Solo cambiamos el color del borde */
     } 
`;

export const Logo = styled.span`
    height: 2.5rem;
    width: auto;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #A0522D;
    display: flex;
    align-items:center ;
    justify-content: center;
`;

export const contenedorCarrito= styled.div`
    position: relative;
`;


export const CarritoImg = styled.img`
    height: 2rem;
    width: auto;
`;

export const productoCount = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 10px;
  background: #D4A437;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 
`;

export const LogoImg = styled.img`
    height: 100%;
    width: 100%;
`;

// Contenedor para el menú de usuario. Es relativo para posicionar el menú desplegable.
export const UserMenuContainer = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px solid transparent;

  /* Al pasar el mouse sobre este contenedor, mostramos el menú (DropdownMenu) */
  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  
`;

// El botón que muestra "Hola, [Usuario]"
export const UserNameButton = styled.div`
  background-color: transparent;
  color: #333;
  padding: 8px 12px;
  font-size: 0.80rem;
  border: none;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 200;
`;

// El menú desplegable en sí.
export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
  border-radius: 5px;
  right: -50px; /* Un valor negativo lo mueve más a la derecha */
  top: 40px; 
  /* Oculto por defecto y con una transición suave */
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px); /* Empieza un poco abajo para un efecto de subida */
  transition: all 0.2s ease-in-out;
`;

// Cada opción dentro del menú desplegable.
export const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 0.80rem;

  &:hover {background-color: #f1f1f1;}
`;
