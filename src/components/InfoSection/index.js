import React from "react";
// import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  // TopLine,
  Heading,
  SubTitle,
  // BtnWrap,
  Column2,
  ImgWrap,
  Img,
  HeadingIconImg,
  HeadingWrapper,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  // topLine,
  lightText,
  darktext,
  description,
  // buttonLabel,
  img,
  alt,
  headline,
  headlineIcon,
  headlineAlt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <HeadingWrapper>
                <HeadingIconImg src={headlineIcon} alt={headlineAlt}/>
                <Heading lighttext={lightText}>{headline}</Heading>
                </HeadingWrapper>
                
                <SubTitle darktext={darktext}>{description}</SubTitle>
                {/* <BtnWrap>
                  <Button to="home">{buttonLabel} </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
