import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  background-color: #ebbb40;
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

  .card__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .card__image {
    width: 50px;
    height: 200px;
    margin-right: 10px;
    align-self: flex-start;
  }
`;
