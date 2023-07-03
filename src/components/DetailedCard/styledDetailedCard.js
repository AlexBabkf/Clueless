import styled, { css } from "styled-components";

export const StyledDetailedCard = styled.div`
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
    background-image: url("beer-background4.jpg");
    border: 1px solid #ccc;
    position: relative;
    bottom: 10;
    height: 70%;
    width: 30%;
    padding: 20px;
    border-radius: 5px;
    overflow: auto;
  }

  .card__basic-info {
  }

  .card h2,
  .card h4,
  .card h5,
  .card p {
    margin: 0;
  }

  .card__image {
    float: left;
    margin-right: 10px;
  }

  .card__content {
    overflow: hidden;
  }

  .description {
    font-size: 20px;
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

  .card__pairing {
    margin-top: 10px;
  }

  .card__pairing ul {
    margin: 0;
    padding-left: 20px;
  }

  .card__pairing ul li {
    list-style-type: disc;
  }

  @media (max-width: 767px) {
    .card {
      height: 60%;
      width: 70%;
    }

    .description {
      font-size: 19px;
    }
  }
`;
