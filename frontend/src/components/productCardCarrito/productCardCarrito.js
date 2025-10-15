import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: row;
  border: 1px solid #D4A437;
  background-color: rgba(245, 230, 211, 0.8);
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  max-width: 430px
  `;

export const Img = styled.img`
  width: auto;
  height: 130px;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 12px;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

export const Button = styled.button`

    background: #D4A437;
    color: #fff;
    border: none;
    border-radius: 0.7rem;
    padding: 0.7rem;
    font-size: 1.3rem;
    font-weight: 600;
    max-width: 50px;
    max-height: 50px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    box-shadow: 0 2px 8px rgba(212, 164, 55, 0.10);

    &:hover {
    background: #C47A6D; /* Rosa Polvoriento */
    color: #fff;
    transform: scale(1.04);
`;

export const DeleteButton = styled.button`

    background: #D4A437;
    color: #fff;
    border: none;
    border-radius: 0.7rem;
    padding: 15px; 
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    box-shadow: 0 2px 8px rgba(212, 164, 55, 0.10);
   


    &:hover {
    background: #C47A6D; /* Rosa Polvoriento */
    color: #fff;
    transform: scale(1.04);
`;

export const botonesContador = styled.div`
    display:flex;
    flex-direction:row;
    gap:15px;
    justify-content:center;
    align-items: center;
    padding-top: 20px;
`;
export const Contador = styled.span`


`;
