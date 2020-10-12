import styled, { keyframes } from 'styled-components';

const fadeFromRight = keyframes`
    from {
        transform: translateX(80px);
    }

    to {
        transform: translateX(0);
    }
`;

export const Corner = styled.div`
  .github-corner {
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    animation: ${fadeFromRight} 1s ease;

    &:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }

    svg {
      fill: var(--color-blue);
      color: var(--white-darker);
      .octo-arm {
        transform-origin: 130px 106px;
      }
    }
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    .github-corner {
      &:hover .octo-arm {
        animation: none;
      }
      .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
      }
    }
  }
`;
