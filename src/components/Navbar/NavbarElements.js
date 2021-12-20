import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  background: #f7637f;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 20;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1180px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 900;
  padding: 0 10px;
  text-transform: uppercase;
  letter-spacing: 3px;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    align-self: center;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 30px;
`;
export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #fff;
    color: #fff;
    transition: 0.8s all ease;
    text-decoration: none;
  }
`;
export const NavDropLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
  }
`;
export const NavDropList = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #fff;
    transition: 0.8s all ease;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavProfileIcon = styled.nav`
  display: flex;
  align-items: center;
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #f7637f;
  white-space: nowrap;
  text-decoration: none;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    text-decoration: none;
    color: #010606;
  }
`;

export const NavLogoImage = styled.img`
  height: 60%;
  width: 60%;
`;
export const NavBarProfile = styled.img`
  height: 60%;
  width: 60%;
  border-radius: 50%;
`;

export const NavHoverList = styled.ul`
  height: 30px;
`;
export const NavDropListLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #fff;
    transition: 0.8s all ease;
  }
`;
export const NavHideList = styled.li`
  /* margin-top:30px;
  padding-top: 0px;
  width: 30vh;
  background-color: red; */
`;
