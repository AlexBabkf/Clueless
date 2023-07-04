import styled, { css } from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  flex-wrap: wrap;

  .image-container {
    flex: 1;
    margin-left: 15px;
  }
  img {
    border-radius: 50%;
  }

  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h1,
  h4 {
    margin: 0;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 25px;
  }
`;
