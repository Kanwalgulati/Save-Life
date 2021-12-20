import React, { useState } from "react";
import {
  BoxContainer,
  TopContainer,
  BackDrop,
  AccountsContainer,
  HeaderContainer,
  HeaderText,
  SmallText,
  TitleImg,
  InnerContainer,
} from "./AccountsElements";
import Heart from "../../images/savelife.svg";
import { Login } from "./Login";
import SideImage from "../../images/sideImage.svg";
import { AccountsImage } from "./CommonElements";
import { SignUp } from "./SignUp";
function Accounts() {
  let [getScope, setScope] = useState(true);
  const toggleScope = () => {
    setScope(!getScope);
  };
  return (
    <>
      <AccountsContainer>
        <AccountsImage src={SideImage} />
        <BoxContainer>
          <TopContainer>
            <BackDrop />
            <TitleImg src={Heart} />
            <HeaderContainer>
              <HeaderText>Welocme</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please Sign In To Continue</SmallText>
            </HeaderContainer>
          </TopContainer>
          <InnerContainer>
            {getScope?<Login setToggleScope={toggleScope}/>:<SignUp setToggleScope={toggleScope}/>}
          </InnerContainer>
        </BoxContainer>
      </AccountsContainer>
    </>
  );
}

export default Accounts;
