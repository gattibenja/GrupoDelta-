import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background-color: #A0522D	;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 3rem;
    padding-right: 4rem;
    position: fixed; 
    top: 0; 
    z-index: 1000; 
    
    @media (max-width: 992px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    
`;

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 15px;
    text-decoration: none;
    list-style-type: none;
    transition: all 0.3s ease-in-out;

    @media (max-width: 992px) {
        display: ${props => props.open ? 'flex' : 'none'};
        flex-direction: column;
        position: absolute;
        top: 100%; /* Justo debajo del nav */
        left: 0;
        width: 100%;
        background-color: #A0522D;
        padding: 1rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }
`;

export const Links = styled(NavLink)`
    text-decoration: none;
    color:  #ffffffff;
    margin: 0 1rem;
    font-size: 0.80rem;
    transition: all 0.2s ease-in-out;
    display: flex; /* Clave: para centrar el contenido verticalmente */
    align-items: center; /* Clave: para centrar el contenido verticalmente */
    padding-bottom: 4px; /* Pequeño espacio para que la línea no esté pegada */
    border-bottom: 1px solid transparent; /* Borde invisible por defecto */
    font-family: Playfair Display;

    &:hover, &.active{
     text-decoration: none;
     transform: scale(1.05);
     color: #D4A437;
     border-bottom-color: #D4A437; /* Solo cambiamos el color del borde */
     } 

     @media (max-width: 992px) {
        padding: 0.8rem 0;
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
  background: #ffffffff;
  color: #000000ff;
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
  color: #ffffffff;
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
  top: 30px; 
  /* Oculto por defecto y con una transición suave */
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px); /* Empieza un poco abajo para un efecto de subida */
  transition: all 0.2s ease-in-out;
`;

export const DropdownUserName = styled.p`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  font-size: 0.80rem;

  &:hover {background-color: #f1f1f1;}
`;

export const HamburgerButton = styled.button`
    display: none; /* Oculto por defecto */
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    div {
        width: 2rem;
        height: 0.25rem;
        background: #ffffffff;
        border-radius: 10px;
        transition: all 0.3s linear;
    }

    @media (max-width: 992px) {
        display: flex;
    }
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
