import styled from "styled-components";


export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    background: linear-gradient(135deg, #A0522D, #C47A6D);
    
    `;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 90%;
  gap: 1rem;
  font-size: 0.65rem;

`;

export const Link = styled.a`
    font-size: 0.5rem;
    color: #D4A437;
    transition: color 0.3s ease;
    text-decoration: none; 

    &:hover{
    color: #ffffff;
}
`;

export const Copyright = styled.div`
    color: #000000;
    font-size: 0.5rem;
`;
