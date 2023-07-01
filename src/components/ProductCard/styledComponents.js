import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  background-image: url("beer-background2.jpg");
  border: 1px solid #ccc;
  height: 280px;
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  overflow-x: auto;

  .card__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 2px;
  }

  .card__image {
    width: 50px;
    height: 200px;
    margin-right: 10px;
    align-self: flex-start;
  }
`;

export const StyledLikeButton = styled.button`
  width: 48px;
  height: 48px;
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 155px;
  padding: unset;
  font-size: 1.5em;
  z-index: 2;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;
