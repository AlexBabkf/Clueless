import styled, { css } from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  justify-content: center;

  .profile-card {
    display: flex;
    flex-wrap: wrap;
    width: 50em;
    padding: 20px;
    background-color: blanchedalmond;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .image-container {
    flex: 1;
    margin-left: 15px;
  }
  img {
    border-radius: 50%;
  }

  .right-section {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: first baseline;
    justify-content: space-evenly;
  }

  h1,
  h4 {
    margin: 0;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10em;
    width: 100%;
    font-size: 25px;
  }

  @media (max-width: 767px) {
    .image-container {
      margin-left: 4px;
    }

    .right-section {
      margin-left: 15px;
    }
  }
`;
