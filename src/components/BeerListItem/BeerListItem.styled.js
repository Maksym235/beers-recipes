import { styled } from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  ${(prop) => {
    if (prop.isSelected) {
      return `
      @media (min-width:768px) {
        height: 400px;
        width: 300px;
      }
      outline: 5px solid #134f5c;
      box-shadow:  10px 10px 22px -3px #134f5c `;
    }
    return `
     border: 2px solid #cfe2f3; box-shadow: 10px 10px 22px -3px rgba(207, 226, 243, 1);
  `;
  }}

  @media (min-width: 768px) {
    width: 300px;
    height: 400px;
  }
  @media (min-width: 1280px) {
    width: 350px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
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
  color: #134f5c;
`;

export const Description = styled(Text)`
  height: 70px;
  overflow: hidden;
  padding-bottom: 5px;
`;

export const Span = styled.span`
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  color: #5c758c;
`;
