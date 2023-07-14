import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Main = styled.main`
  padding: 30px 20px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  tex-decoration: none;
  color: #134f5c;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;
export const Name = styled.h3`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #134f5c;
`;

export const Text = styled.b`
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  color: #5c758c;
`;

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #134f5c;
`;

export const Conteiner = styled.div`
  color: #5c758c;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 3px;
`;

export const Item = styled.li`
  padding: 10px;
  border: 1px solid #cfe2f3;
  background-color: #5c758c;
  border-radius: 5px;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  color: #cfe2f3;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const IngrList = styled(List)`
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const IngrItem = styled(Item)`
  background-color: transparent;
  gap: 5px;
  border: 1px solid #5c758c;
  color: #5c758c;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Span = styled.span`
  color: #134f5c;
`;

export const IncideText = styled.p`
  display: flex;
  gap: 3px;
`;
