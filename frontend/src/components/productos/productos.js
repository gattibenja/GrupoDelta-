import styled from "styled-components";


export const Destacados = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
    padding: 60px 20px;
    border-top: 2px solid  #D4A437; 
    background: linear-gradient(135deg, #F5E6D3 0%, #87A96B22 100%);
`;


export const Section = styled.section`
  padding: 20px;
  max-width: 1100px;
  margin: auto;
  
`;

export const Title = styled.h1`
   font-size: 2rem;
  color: #A0522D;
  margin-bottom: 2rem;
  font-family: Georgia, 'Times New Roman', serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  
`;