import styled, { css, keyframes } from 'styled-components';

const fade = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  } 
  
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const FullPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-darker);

  a.back-link {
    color: var(--color-blue);
    text-decoration: none;
    position: absolute;
    top: 1.1rem;
    left: 1.1rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;

    i {
      margin-right: 6px;
    }

    &:hover {
      color: var(--color-blue-darker);
    }
  }
`;

export const Container = styled.div`
  width: 80%;
  height: 65%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 725px) {
    height: 80%;
  }
`;

export const LeftBlock = styled.aside`
  background-color: var(--white);
  padding: 1rem;
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.15);
  animation: ${fade} 1s ease;

  div.title-and-image {
    display: flex;

    img {
      width: 145px;
      height: 215px;
    }

    h1 {
      margin-left: 5px;
      font-size: 1.4rem;
      font-family: 'Space Mono', monospace;
      font-weight: 500;
      text-align: center;
    }
  }

  div.stats {
    height: 40%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .stat-row {
      label {
        font-weight: 600;
      }

      span {
        font-weight: 400;
      }
    }
  }

  @media (max-width: 1280px) {
    width: 49%;
  }

  @media (max-width: 725px) {
    width: 100%;
    height: 80%;
    order: 1;

    overflow-y: scroll;

    /* Scroll width */
    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Scroll Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }

    /* Scroll Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--color-primary);
      border-radius: 10px;
    }

    /* Scroll Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      filter: brightness(0.9);
    }

    div.title-and-image {
      flex-direction: column;
      align-items: center;
    }

    div.stats {
      align-items: center;

      .stat-row {
        text-align: center;
      }
    }
  }
`;

export const MiddleBlock = styled.div`
  height: 100%;
  width: 70%;

  animation: ${fade} 1.5s ease;

  ${(props) =>
    !props.cover2Columns &&
    `
    width: 45%;
  `}

  border-radius: 0.5rem;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.15);
  background-color: var(--white);
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 6px;

  overflow-y: scroll;

  /* Scroll width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Scroll Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  /* Scroll Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 10px;
  }

  /* Scroll Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    filter: brightness(0.9);
  }

  h2 {
    font-weight: 500;
    margin-bottom: 0.9rem;
  }

  p.description {
    font-weight: 400;
  }

  @media (max-width: 1280px) {
    order: 3;
    width: 100%;
    margin-top: 0.5rem;
    max-height: 450px;
    margin-bottom: 0.65rem;

    ${(props) =>
      props.cover2Columns &&
      css`
        order: 2;
        width: 49%;
        margin: 0;
        height: 100%;
      `}
  }

  @media (max-width: 725px) {
    width: 100%;
    order: 2;

    h2 {
      text-align: center;
    }

    ${(props) =>
      props.cover2Columns &&
      css`
        margin: 0.6rem 0;
      `}
  }
`;

export const RightBlock = styled.div`
  width: 25%;
  border-radius: 0.5rem;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.15);
  background-color: var(--white);
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${fade} 2s ease;

  .is-for-sale-label {
    text-align: center;
    font-size: 1.6rem;
    color: var(--color-blue);
  }

  .book-mini-data-row {
    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      font-family: 'Space Mono', monospace;
      text-align: center;
    }

    h4 {
      font-size: 1.1rem;
      font-weight: 300;
      font-family: 'Space Mono', monospace;
      text-align: center;
      margin-bottom: 0.7rem;
    }

    div.categories {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      span {
        display: inline-block;
        padding: 0.2rem 0.5rem;
        background-color: var(--color-primary);
        color: var(--white);
        border-radius: 0.25rem;
        margin: 0.2rem 0;
      }
    }
  }

  .price-row {
    display: flex;
    flex-direction: column;

    span.pre-price-label {
      color: var(--color-primary);
      font-size: 1.55rem;
    }

    span.price {
      font-size: 2.4rem;
      color: var(--color-blue);
      font-weight: 500;
      letter-spacing: 1px;
      text-align: end;
    }
  }

  .button-row {
    a {
      display: block;
      text-decoration: none;
      text-align: center;
      padding: 0.8rem;
      width: 100%;
      border: 2px solid var(--color-blue);
      outline: none;
      background: transparent;
      border-radius: 0.3rem;
      color: var(--color-blue);
      font-size: 0.95rem;
      cursor: pointer;

      transition: background 0.2s ease, color 0.2s ease;

      i {
        margin-left: 8px;
      }

      &:hover {
        background-color: var(--color-blue);
        color: var(--white);
      }
    }
  }

  @media (max-width: 1280px) {
    width: 49%;
  }

  @media (max-width: 725px) {
    width: 100%;
    order: 3;
  }
`;
