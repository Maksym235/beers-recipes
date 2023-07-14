import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Head = styled.header`
  display: flex;
  align-items: center;
  background-color: #5c758c;
  border-radius: 0px 0px 10px 10px;
`;

export const Logo = styled(Link)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  padding: 10px 0px 10px 20px;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 43px; /* 107.5% */
  letter-spacing: 0.4px;
  color: #cfe2f3;
  text-transform: uppercase;
`;
