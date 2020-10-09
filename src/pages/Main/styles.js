import styled from 'styled-components';

export const InputSection = styled.section`
  background-color: var(--color-primary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;

  h1.logo {
    font-size: 2.5rem;
    letter-spacing: 1px;
    font-weight: 400;

    .logo-blue {
      color: var(--color-blue);
      font-weight: 600;
    }
  }
`;
