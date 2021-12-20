import styled from "styled-components";
import { Link } from "react-router-dom";
export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#f7637f")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#f7637f" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: 1px solid #fff;
  text-decoration:none;
  
  &::hover {
    border: 1px solid #f7637f;
    color: ${({ dark }) => (dark ? "#fff" : "#f7637f")};
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#f7637f" : "#fff")};
  }
  
`;
