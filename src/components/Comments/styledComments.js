import styled, { css } from "styled-components";

export const StyledComments = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  border-top: 20px;

  ul {
    list-style: none;
    padding: 0;
    width: 600px;
  }

  li {
    margin-bottom: 20px;
    position: relative;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-image: url("/beer-background.jpg");
  }

  h4 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  h4 a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
  }
`;
