import styled, { css } from "styled-components";

export const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: sticky;
  background-color: yellow;
  width: 100%;
  border: solid 1px black;
  bottom: 0;

  a {
    margin: 10px;
  }

  a:hover {
  }
`;
