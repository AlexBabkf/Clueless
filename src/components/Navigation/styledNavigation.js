import styled, { css } from "styled-components";

export const StyledNavigation = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: sticky;
  background-color: #ebbb40;
  width: 100%;
  border: solid 1px black;
  bottom: 0;
  z-index: 9997;

  a {
    margin: 10px;
  }

  a:hover {
  }
`;
