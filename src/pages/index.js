import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { FindDonar, AnswerToEmergencies, SomeoneHero, MadeForEveryone } from "../components/InfoSection/Data";
import Services from "../components/Services";
import JoinTheCause from "../components/JoinTheCause";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeroSection />
      <Services />
      <JoinTheCause />
      <InfoSection {...FindDonar}/>
      <InfoSection {...AnswerToEmergencies}/>
      <InfoSection {...MadeForEveryone}/>
      <InfoSection {...SomeoneHero}/>
    </>
  );
};


export default Home;
