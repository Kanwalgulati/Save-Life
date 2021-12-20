import React from "react";
import { ServicesContainer, ServicesH1, ServicesH3, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";
import icon1 from '../../images/image5.svg';
import icon2 from '../../images/image6.svg';
import icon3 from '../../images/image7.svg';
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>We Save Lives</ServicesH1>
        <ServicesH3>
          Find blood donors near your location and make a blood request in less
          than 5 minutes.
        </ServicesH3>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={icon1} />
            <ServicesH2>Find Blood</ServicesH2>
            <ServicesP>
              Find blood donors near your location and request the needed blood
              type
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={icon2} />
            <ServicesH2>Get Notified</ServicesH2>
            <ServicesP>
              Get notified about requests instantly, either on our app or by sms
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={icon3} />
            <ServicesH2>Forever Free</ServicesH2>
            <ServicesP>
              You don't have to pay anything, Save Life Connect is forever Free
              !
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
