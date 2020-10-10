import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
`;

const fadeFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px)
  }
  
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const InputSection = styled.section`
  height: 35vh;

  .container {
    width: 75%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  background-color: var(--color-primary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  width: 100%;

  h1.logo {
    font-size: 3rem;
    letter-spacing: 0.5px;
    font-weight: 300;
    margin-bottom: 1.7rem;

    .logo-blue {
      color: var(--color-blue);
      font-weight: 500;
    }
  }

  form {
    animation: ${fadeFromBottom} 1s ease;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .label {
      width: 100%;
      font-size: 1.25rem;
      text-align: start;
      margin-bottom: 0.4rem;
    }

    .input {
      width: 100%;
      display: flex;
      align-items: center;

      input {
        width: 80%;
        height: 100%;
        border: none;
        outline: none;
        background-color: var(--color-secondary);
        color: var(--white);
        font-size: 1.1rem;
        padding: 0 0.5rem;
      }
    }

    .error {
      width: 100%;
      font-size: 0.9rem;
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  width: 20%;
  height: 100%;
  padding: 0.5rem 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  transition: background 0.25s ease;
  font-size: 1.07rem;

  i {
    transition: transform 0.25s ease;
  }

  &:hover {
    background-color: #eee;

    i {
      transform: scaleX(-1) scaleX(1.05);
    }
  }

  &[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }

  ${(props) =>
    props.loading &&
    css`
      i {
        animation: ${rotate} 1.5s linear infinite;
        color: var(--color-primary);
      }
    `}
`;

export const BooksSection = styled.section`
  margin-top: -1.6rem;
  display: flex;
  justify-content: center;

  .container {
    width: 75%;
  }

  h1.no-books {
    margin-top: 2.5rem;
    text-align: center;
    font-weight: 500;
    color: var(--color-primary);
  }
`;
