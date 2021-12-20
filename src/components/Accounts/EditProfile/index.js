import React from "react";
import {
  AccountsContainer,
  BoxContainer,
  TopContainer,
  BackDrop,
  TitleImg,
  HeaderContainer,
  HeaderText,
  SmallText,
  InnerContainer,
} from "../AccountsElements";
import { AccountsImage } from "../CommonElements";
import EditProfileForm from "./EditProfileForm";
import SideImage from '../../../images/sideImage.svg';
import Heart from '../../../images/savelife.svg';

function EditProfile({userData , getUserId}) {
  console.log("User Edit Profile Data::::",userData);
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
              <HeaderText>Hero</HeaderText>
              <SmallText>Edit Profile</SmallText>
            </HeaderContainer>
          </TopContainer>
          <InnerContainer>
            <EditProfileForm userData={userData} getUserId={getUserId}/>
          </InnerContainer>
        </BoxContainer>
      </AccountsContainer>
    </>
  );
}

export default EditProfile;
