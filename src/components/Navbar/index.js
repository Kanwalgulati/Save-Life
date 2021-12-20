import React from "react";
import { FaBars } from "react-icons/fa";
import { auth } from "../../Config/FireBase";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLogoImage,
} from "./NavbarElements";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import HeartLogo from "../../images/savelife.svg";
const Navbar = ({ toggle, auth: getAuth, userData, admin: isAdmin }) => {
  const history = useHistory();
  const logout = () => {
    auth.signOut();
    history.push("/");
    toast.success("You LoggedOut successfully", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            {" "}
            <NavLogoImage src={HeartLogo} alt="heart" />
            Save Life
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="volunteers">Volunteers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="SaveSomeoneLife">Donate</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Camp">Camp</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="requestBlood">Request</NavLinks>
            </NavItem>
            {getAuth && !isAdmin ? (
              <>
                <NavItem>
                  <NavLinks to="MyHistory">My History</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="ContactUs">Contact Us</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks onClick={logout}>Logout</NavLinks>
                </NavItem>
              </>
            ) : null}
            {getAuth && isAdmin ? (
              <>
                <NavItem>
                  <NavLinks to="userContactedUs">View Messages</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="viewRequest">View Request</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks onClick={logout}>Logout</NavLinks>
                </NavItem>
              </>
            ) : null}
          </NavMenu>
          {!getAuth ? (
            <>
              <NavBtn>
                <NavBtnLink to="login">Login</NavBtnLink>
              </NavBtn>
            </>
          ) : (
            <NavBtn>
              <NavBtnLink to="editProfile" userData={userData}>
                Edit Profile
              </NavBtnLink>
            </NavBtn>
          )}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
