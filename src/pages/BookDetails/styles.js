import styled from 'styled-components';

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
`;

export const MiddleBlock = styled.div`
  height: 100%;
  width: 70%;

  ${(props) =>
    props.cover2Columns &&
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
  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 10px;
  }

  /* Handle on hover */
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
`;
