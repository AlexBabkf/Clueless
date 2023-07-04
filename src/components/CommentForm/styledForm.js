import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  form {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: vertical;
  }

  button {
    display: block;
    margin-top: 10px;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 5px;
    background-color: #f28e1c;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #fbb117;
  }
`;
