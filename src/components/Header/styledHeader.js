import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #ebbb40;

  color: black;
  border-bottom: solid;
  text-align: center;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  h1 {
    grid-area: 1 / 2 / 2 / 5;
    font-size: 60px;
    cursor: pointer;
  }

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
        0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
    }
    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }

  .neon {
    animation: flicker 1.5s infinite alternate;
  }

  .sign-in {
    grid-area: 1 / 5 / 2 / 5;
    background: none;
    color: black;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }

  .back-button {
    grid-area: 1 / 1 / 2 / 2;
    background: none;
    color: black;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 50px;
    }
  }
`;
