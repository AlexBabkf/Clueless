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
  }
  .sign-in {
    grid-area: 1 / 5 / 2 / 5;
    background: none;
    color: black;
    border: none;
    cursor: pointer;
  }

  .back-button {
    grid-area: 1 / 1 / 2 / 2;
    background: none;
    color: black;
    border: none;
    cursor: pointer;
  }
`;
