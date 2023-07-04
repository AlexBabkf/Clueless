import styled, { css } from "styled-components";

export const StyledDetailedPage = styled.div`
  display: flex;
  justify-content: center;

  .card {
    width: 800px;
    padding: 20px;
    background-image: url("/beer-background4.jpg");
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card__basic-info {
    text-align: center;
  }

  .card__basic-info h2 {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .card__basic-info h4 {
    font-size: 14px;
    margin-top: 5px;
    font-style: italic;
  }

  .card__basic-info h5 {
    font-size: 14px;
    margin-top: 10px;
  }

  .card__content {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .card__image {
    margin-right: 10px;
  }

  .card__content p {
    font-size: 21px;
    line-height: 1.5;
    margin-left: 20px;
  }

  .card h5 {
    font-size: 14px;
    margin-top: 10px;
  }

  .card h5:first-of-type {
    margin-top: 20px;
  }

  .card__pairing {
    display: block;
    margin-top: 20px;
  }

  .card__pairing ul {
    margin: 5px 0;
    padding-left: 20px;
  }

  .card__pairing ul li {
    font-size: 14px;
    line-height: 1.5;
  }

  .card__pairing + h5 {
    margin-top: 20px;
  }

  .card__pairing + p {
    font-size: 14px;
    line-height: 1.5;
  }
`;
