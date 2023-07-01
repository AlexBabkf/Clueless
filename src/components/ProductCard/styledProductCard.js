import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  padding: 20px 20px 20px;
  display: grid;
  gap: 20px;
  border-radius: 8px;
  background-color: blanchedalmond;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  cursor: pointer;

  .card__content {
    display: grid;
    gap: 10px;
  }
`;
