import styled, { css } from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .beer-mug-container {
    position: relative;
    width: 14em;
    height: 20em;
  }

  .beer-liquid {
    position: absolute;
    bottom: 5em;
    left: 2.7em;
    width: 6em;
    background-color: #fdc500;
    animation: fillBeer 2s linear infinite;
    transform-origin: bottom;
  }

  @keyframes fillBeer {
    0% {
      height: 0;
    }
    50% {
      height: 25%;
    }
    100% {
      height: 50%;
    }
  }
`;
