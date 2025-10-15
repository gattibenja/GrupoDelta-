import styled from "styled-components";
import carpinteroImg from "../../assets/imagenes/Carpintero.png";
import { NavLink } from "react-router-dom";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 100%;
    overflow-x: hidden;
`;
export const HeroBanner = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 72vh;
    width: 100%;
    max-width: 100vw;
    margin-bottom: 40px;
    padding: 30px;
    box-sizing: border-box;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${carpinteroImg});
    border-radius: 5px;
    color: #fff;
    filter: drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.25));

    &::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.40); 
        border-radius: 5px;
        z-index: 0;
    }
`;

export const Title = styled.h1`
    color:#F5E6D3; 
    font-size: 2.1rem;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    position: relative;
    z-index: 1;
`;

export const SubTitle = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    text-align: center;
    position: relative;
    z-index: 1;
`;

export const Boton = styled(NavLink)`
    background-color:#A0522D;
    text-decoration: none;
    color: rgb(255, 255, 255);
    border-radius: 30px;
    padding: 12px 15px;
    font-size: 1rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
   
    border: 0.5px solid #D4A437;
    position: relative;
    z-index: 1;

    &:hover {
    background-color: #A0522D;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    border: 2px solid #D4A437;  } */
`;

