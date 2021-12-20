import React, { Component } from "react";
import {  FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, FooterWrap, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons } from "./FooterElements";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <>
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                  <FooterLink to="/">How It Works</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
<SocialMedia>
    <SocialMediaWrap>
        <SocialLogo to ='/'>
            Save Life
        </SocialLogo>
        <WebsiteRights>Save Life {new Date().getFullYear()}
        All rights reserved.</WebsiteRights>
        <SocialIcons>
            <SocialIconLink href = '/' target="_blank" aria-label="Facebook">
                <FaFacebook/>
            </SocialIconLink>
            <SocialIconLink href = '/' target="_blank" aria-label="Instagram">
                <FaInstagram/>
            </SocialIconLink>
            <SocialIconLink href = '/' target="_blank" aria-label="Youtube">
                <FaYoutube/>
            </SocialIconLink>
            <SocialIconLink href = '/' target="_blank" aria-label="Twitter">
                <FaTwitter/>
            </SocialIconLink>
            <SocialIconLink href = '/' target="_blank" aria-label="LinkedIn">
                <FaLinkedin/>
            </SocialIconLink>
        </SocialIcons>
    </SocialMediaWrap>
</SocialMedia>

          </FooterWrap>
        </FooterContainer>
      </>
    );
  }
}
export default Footer;
