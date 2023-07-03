import styled, { css } from "styled-components";

export const StyledList = styled.div`
  display: flex;
  scroll-behavior: smooth;
  flex-direction: column;

  .item {
    display: flex;
    flex-flow: row;
    margin: 12px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    gap: 21px;
    left: 0;
  }

  .category {
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 45%;
  }

  @media (max-width: 767px) {
    .category {
      margin-left: 40%;
    }
  }
`;
