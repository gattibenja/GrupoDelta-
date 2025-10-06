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
    padding: 0.4rem 1rem;
    position: sticky; 
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
    font-size: 0.6rem;
    transition: all 0.15s ease-in-out;

    &:hover, &.active{
     text-decoration: none;
     transform: scale(1.05);
     color: #D4A437;
     border-bottom: 1px solid #C47A6D;
     } 
`;

export const Logo = styled.span`
    height: 2rem;
    width: auto;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #A0522D;
    display: flex;
    align-items:center ;
    justify-content: center;
`;

export const LogoImg = styled.img`
    height: 100%;
    width: 100%;
`;
