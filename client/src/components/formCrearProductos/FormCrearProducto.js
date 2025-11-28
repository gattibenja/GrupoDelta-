import styled from "styled-components";



export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%;
    max-width: 500px;
    height: auto;
    gap: 20px;
    margin: 80px auto; 
    background: #fffdf9;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    border-radius: 15px;
    padding-top: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 90%;
        margin: 40px auto;
        gap: 15px;
    }
`;

export const Titulo = styled.h1`
     
      text-align: center;
      font-size: 1.5rem;
      color: #A0522D;
      font-family: Georgia, 'Times New Roman', serif;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
`;

export const Descripcion = styled.p`
    
`;

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    gap: 25px;

    @media (max-width: 768px) {
        gap: 20px;
    }
    `;

export const Label = styled.label`
    font-weight: bold;
    color: #3e2d1a;
    text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #c4a77d;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #c4a77d;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
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
