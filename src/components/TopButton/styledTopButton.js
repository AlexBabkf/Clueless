import styled, { css } from "styled-components";

export const StyledTopButton = styled.button`
  z-index: 9999;
  position: fixed;
  cursor: pointer;
  bottom: 55px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid #484848;
  opacity: ${(props) => (props.isSeen ? 0 : 1)};
  outline: 0;

  img {
    width: 70%;
    height: 70%;
  }
`;
