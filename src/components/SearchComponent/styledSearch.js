import styled, { css } from "styled-components";

export const StyledSearch = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;

  h2 {
    margin-bottom: 20px;

    position: relative;
    display: inline-block;
  }

  h2::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background-image: linear-gradient(to left, #ff0000, rgba(255, 0, 0, 0));
    z-index: -1;
  }

  h5 {
    margin-bottom: 10px;
  }

  form {
    margin-bottom: 20px;
  }

  input {
    padding: 5px;
    margin-bottom: 10px;
  }

  button[type="submit"] {
    padding: 10px 20px;
    background-color: #f28e1c;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #fbb117;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 0;
    margin: 0;
  }
`;
