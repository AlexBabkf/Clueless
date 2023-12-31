import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  .card {
    z-index: 3;
    background-color: blanchedalmond;
    border: 1px solid #ccc;
    position: relative;
    bottom: 10;
    height: 50%;
    width: 50%;
    padding: 20px;
    border-radius: 5px;
    overflow: auto;
  }

  .card__button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 50%;
    cursor: pointer;
  }

  .card__button:hover {
    background-color: darkred;
  }
`;
