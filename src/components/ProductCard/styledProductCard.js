import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  background-color: #ebbb40;
  border: 1px solid #ccc;
  height: 280px;
  width: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .card__left {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .card__right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .card__image {
    align-self: flex-start;
    margin-right: 10px;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
  }

  .favButton:hover {
    background-color: darkred;
  }
`;
