import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/newBlood.mp4";
import { Button } from "../ButtonElement";
import { useHistory } from "react-router-dom";
import { NavLinks } from "../Navbar/NavbarElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const history = useHistory();
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Save Life Connect</HeroH1>
        <HeroP>Connecting blood donors with recipients</HeroP>
        <HeroBtnWrapper>
          <Button>
            <NavLinks to="covid" onMouseEnter={onHover} onMouseLeave={onHover}>
              Live Covid 19 Cases{hover ? <ArrowForward /> : <ArrowRight />}
            </NavLinks>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
