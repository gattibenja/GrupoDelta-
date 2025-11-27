import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  max-width: 900px;
  margin: 120px auto;
  padding: 40px;
  background: #fffdf9;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-family: 'Inter', sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #A0522D;
  font-family: Georgia, 'Times New Roman', serif;
  margin-bottom: 40px;
`;

export const PurchaseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const PurchaseCard = styled.li`
  background: #ffffff;
  border: 1px solid #eee;
  border-left: 5px solid #D4A437;
  border-radius: 8px;
  padding: 20px 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #ddd;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #333;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

export const StatusBadge = styled.span`
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: capitalize;
  background-color: ${props => (props.status === 'pending' ? '#fef3c7' : '#dcfce7')};
  color: ${props => (props.status === 'pending' ? '#92400e' : '#166534')};
`;

export const CardBody = styled.div`
  h4 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #A0522D;
  }
`;

export const ProductList = styled.ul`
  list-style: none;
  padding-left: 15px;
  margin: 0;
`;

export const ProductItem = styled.li`
  font-size: 0.95rem;
  color: #555;
  padding: 5px 0;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  padding: 40px 0;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  padding: 40px 0;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #d9534f;
  padding: 40px 0;
  border: 1px solid #d9534f;
  background-color: #f2dede;
  border-radius: 8px;
`;