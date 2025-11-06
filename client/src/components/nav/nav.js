import { NavLink } from "react-router-dom";
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
    transition: all 0.15s ease-in-out;

    &:hover, &.active{
     text-decoration: none;
     transform: scale(1.05);
     color: #D4A437;
     border-bottom: 1px solid #C47A6D;
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
