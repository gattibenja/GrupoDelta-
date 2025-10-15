import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  border: 1px solid #D4A437;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(245, 230, 211, 0.8);
  padding: 20px;

  &:hover {
    transform: translateY(-5px); /* efecto levantar */
    border-color:  #A0522D; 
    box-shadow: 0px 8px 16px rgba(0,0,0,0.08);
    
  }
 
`;

export const Img = styled.img`
  width: auto;
  height: 180px;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 12px;
  
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

