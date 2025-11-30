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
  margin-bottom: 3.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  
`;

export const UserCard = styled.div`
  background: #ffffff;
  border-left: 5px solid #A0522D;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.h3`
  font-size: 1.3rem;
  color: #333;
  font-family: Georgia, serif;
  margin: 0;
`;

export const UserInfo = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  word-break: break-all;
`;

export const RoleBadge = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  background-color: ${props => (props.role === 'admin' ? '#D4A437' : '#87A96B')};
`;

export const CardActions = styled.div`
  margin-top: 10px;
  border-top: 1px solid #eee;
  padding-top: 15px;
  display: flex;
  justify-content: flex-end;
`;

export const ActionButton = styled.button`
  background-color: #A0522D;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #8B4513;
  }
`;