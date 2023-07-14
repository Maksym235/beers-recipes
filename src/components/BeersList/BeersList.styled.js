import { styled } from "styled-components";

export const List = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;

    &:last-child {
      justify-content: flex-start;
    }
  }
`;
