import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 84.3vh;

`;

export const productsContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:30px;
`;

export const Title = styled.h1`
   font-size: 2rem;
  color: #A0522D;
  margin-bottom: 2rem;
  font-family: Georgia, 'Times New Roman', serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
`;

export const TotalSection = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px solid #D4A437;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  h3 {
    font-size: 1.8rem;
    color: #333;
  }
`;

export const ConfirmButton = styled.button`
  padding: 15px 30px;
  background-color: #A0522D;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #8c532e;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
`;
