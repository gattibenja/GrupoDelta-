import styled from "styled-components";

export const BotonWrapper = styled.div`
  /* Centra el contenido (el botón) horizontalmente */
  display: flex;
  justify-content: center;
  
  /* 
    Crea un espacio negativo arriba para acercar el botón al formulario 
    y un espacio positivo abajo para separarlo del footer.
    Ajusta estos valores según tu preferencia.
  */
  margin-top: -50px; 
  margin-bottom: 120px;
`;

export const Boton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: #3e2d1a;
  border: 1px solid #adadadff;
  border-radius: 25px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #5d5d5dff;
    color: white;
  }
`;