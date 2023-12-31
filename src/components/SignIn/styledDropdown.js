import styled, { css } from "styled-components";

export const StyledDropdown = styled.button`
  background: none;
  border: none;
  margin-top: 10px;
  cursor: pointer;

  .menu {
    position: absolute;
    z-index: 9999;
    list-style-type: none;
    margin: 5px 0;
    padding: 0;

    border: 1px solid grey;
    width: 150px;
  }

  .menu > ul {
    background: transparent;
    border: none;
  }

  .menu > li {
    margin: 0;
    border: 1px solid grey;
    /* width: 100%; */
    background-color: white;
  }

  .menu > li:hover {
    background-color: lightgray;
  }

  .menu-item {
    width: 100%;
    height: 100%;
    text-align: left;
    border: 1px solid grey;
    background: none;
    color: inherit;
    border: none;
    padding: 5px;
    margin: 0;
    font: inherit;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    margin-top: 7px;
    position: relative;

    .menu {
      position: absolute;
      right: 0;
    }
  }
`;
