import styled from "styled-components";

export const Titulo = styled.h1`
  font-family: Georgia, 'Times New Roman', serif;
  text-align: center;
  margin-top: 50px;
  color: #333;
`;

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%; /* Ancho para pantallas de escritorio */
    max-width: 450px; /* Un ancho máximo para que no se estire demasiado */
    height: auto;
    margin: 30px auto 100px auto; 
    background: #fffdf9;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    border-radius: 15px;
    padding: 30px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 90%; /* Ocupa más ancho en móviles */
        margin: 20px auto; /* Reduce el margen en móviles */
        padding: 20px;
        box-shadow: none;
    }
`;

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    gap: 20px;
`;

export const Label = styled.label`
    font-weight: bold;
    color: #3e2d1a;
    font-size: 0.9rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #c4a77d;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */

  &:focus {
    outline: none;
    border-color: #A0522D;
  }
`;

export const Boton = styled.button`
  padding: 12px;
  margin-top: 10px; /* Espacio extra arriba del botón */
  background-color: #A0522D;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    background-color: #8c532e;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;