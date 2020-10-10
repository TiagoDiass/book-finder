import styled from 'styled-components';

export const BookBlock = styled.div`
  display: flex;
  height: 260px;
  width: 45%;
  background-color: var(--white);
  border-radius: 0.6rem;
  margin: 0.6rem 0.6rem;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  transition: transform 0.2s ease, opacity 0.2s ease;

  .thumbnail {
    width: 35%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .book-data {
    width: 65%;
    height: 100%;
    padding-right: 6px;

    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 0.5rem;

    h3,
    h5 {
      align-self: flex-start;
      font-family: 'Space Mono', monospace;
    }

    h3 {
      margin-bottom: 5px;
    }

    p {
      display: block;
      width: 100%;
      font-size: 0.8rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      align-self: center;
    }

    .details {
      width: 100%;
    }

    a {
      display: block;
      text-decoration: none;
      width: 100%;
      background-color: var(--color-blue);
      color: var(--white);
      text-transform: uppercase;
      font-weight: 500;
      border: none;
      outline: none;
      padding: 0.5rem 0.8rem;
      text-align: center;
      border-radius: 0.4rem;
      cursor: pointer;

      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  &:hover {
    transform: translateY(-9px);
  }

  @media (max-width: 850px) {
    width: 100%;
    margin: 0.6rem;

    .thumbnail {
      width: 25%;
    }

    .book-data {
      width: 75%;
    }

    &:hover {
      transform: translateY(0);
      opacity: 0.9;
    }
  }

  @media (max-width: 570px) {
    .thumbnail {
      width: 35%;
    }

    .book-data {
      width: 65%;
    }
  }
`;
