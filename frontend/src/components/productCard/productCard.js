import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  border: 1px solid #D4A437;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
 
  &:hover {
    transform: translateY(-5px); /* efecto levantar */
    border: 2px solid #D4A437; 
    box-shadow: 0px 8px 16px rgba(0,0,0,0.08);
  }
 
`;

export const Img = styled.img`
  width: 100%;
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

export const Desc = styled.p`
  margin: 8px 0;
  color: #555;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #2563eb;
  color: white;
`;
