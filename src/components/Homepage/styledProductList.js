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
    position: relative;
    display: inline-block;
  }

  .category::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background-image: linear-gradient(to left, #ff0000, rgba(255, 0, 0, 0));
    z-index: -1;
  }

  @media (max-width: 767px) {
    .category {
      margin-left: 40%;
    }
  }
`;
