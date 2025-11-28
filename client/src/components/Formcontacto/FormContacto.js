import styled from "styled-components";



export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 25%; /* Ancho en escritorio, ajustado para mejor proporción */
    height: auto;
    gap: 20px;
    margin: 100px auto; 
    background: #fffdf9;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    border-radius: 15px;

    @media (max-width: 768px) {
        width: 90%; /* Ocupa más ancho en móviles */
        margin: 50px auto; /* Reduce el margen superior en móviles */
    }
    
`;

export const Titulo = styled.h1`
  font-family: Georgia, 'Times New Roman', serif;
  
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 0 20px;
`;

export const Descripcion = styled.p`
    
`;

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    gap: 30px;

    @media (max-width: 768px) {
        gap: 20px; /* Reduce el espacio entre campos en móviles */
    }
    
    `;

export const Label = styled.label`
    font-weight: bold;
    color: #3e2d1a;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #c4a77d;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #c4a77d;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
`;

export const Boton = styled.button`
  padding: 12px;
  background-color: #A0522D;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    background-color: #8c532e;
  }

`;
