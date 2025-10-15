import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #D4A437;
  backdrop-filter: blur(6px);
  padding: 10px

 }
`;

`{/*&:hover {
    transform: translateY(-5px); /* efecto levantar */
    border: 1px solid #D4A437; 
    box-shadow: 0px 8px 16px rgba(0,0,0,0.08);*/
  }`
 

export const Img = styled.img`
  width: auto;
  height: 220px;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px
  
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

export const Desc = styled.p`
  margin: 8px 0;
  color: #555;
  display: flex;
  align-text:center;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Button = styled.button`
  background-color:#A0522D;
    text-decoration: none;
    color: rgb(255, 255, 255);
    border-radius: 30px;
    padding: 12px 15px;
    font-size: 1rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    border: 0.5px solid #D4A437;
    position: relative;
    z-index: 1;

    &:hover {
    background-color: #A0522D;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    border: 0.5px solid #D4A437; 
    } 
`;
