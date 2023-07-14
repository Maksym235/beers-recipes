import { styled } from "styled-components";

export const Conteiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: #999999;
  border-radius: 20px;
  gap: 10px;
`;

export const Clear = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  background-color: #5c758c;
  border: none;
  border-radius: 10px;
`;

export const Delete = styled(Clear)`
  background-color: red;
  color: #fff;
`;
