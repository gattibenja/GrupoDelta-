import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const ToastWrapper = styled.div`
  background-color: #fff;
  color: #333;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  animation: ${fadeIn} 0.3s ease-out forwards;
  border-left: 5px solid;

  ${({ type }) => {
    if (type === 'success') return css`border-left-color: #28a745;`;
    if (type === 'error') return css`border-left-color: #dc3545;`;
    return css`border-left-color: #007bff;`; // info
  }}

  &.exiting {
    animation: ${fadeOut} 0.3s ease-in forwards;
  }
`;

const Message = styled.span`
  margin-right: 15px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #aaa;
  font-size: 20px;
  cursor: pointer;
  padding: 0 5px;
`;

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); 

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <ToastWrapper type={type}>
      <Message>{message}</Message>
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </ToastWrapper>
  );
};

export default Toast;
