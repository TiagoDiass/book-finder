import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background: transparent;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--color-blue);
  animation: ${rotate} 1s linear infinite;
`;
