import styled from "styled-components";



export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width:50%;
    height: auto;
    gap: 20px;
    margin: 100px auto; 
    background: #fffdf9;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    border-radius: 15px;
    
`;

export const Titulo = styled.h1`

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
    
    `;

export const Label = styled.label`
    font-weight: bold;
    color: #3e2d1a;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #c4a77d;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
`;

export const TextArea = styled.textarea`
     padding: 10px;
  border: 1px solid #c4a77d;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;   
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

