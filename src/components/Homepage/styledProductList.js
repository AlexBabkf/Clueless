import styled, { css } from "styled-components";

export const StyledList = styled.div`
  display: flex;
  scroll-behavior: smooth;
  flex-direction: column;
  background-color: limegreen;

  .item {
    display: flex;
    flex-flow: row;
    margin: 12px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    gap: 21px;
  }
`;
