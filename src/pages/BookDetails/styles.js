import styled from 'styled-components';

export const FullPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-darker);
`;

export const Container = styled.div`
  width: 80%;
  height: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftBlock = styled.aside`
  background-color: var(--white);
  width: 30%;
  height: 100%;
  padding: 1rem;
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
