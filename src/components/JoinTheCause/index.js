import React, { Component } from "react";
import saveLife from "../../images/savelife.svg";
import { JoinTheCauseContainer, JoinTheCauseIcon, JoinTheCauseH1, JoinTheCauseP } from "./JoinTheCauseElements";

export class JoinTheCause extends Component {
  render() {
    return (
      <>
        <JoinTheCauseContainer id="joinTheCause">
          <JoinTheCauseIcon src={saveLife} />
          <JoinTheCauseH1>Join the Cause</JoinTheCauseH1>
          <JoinTheCauseP>
            Join our cause and help us save more lives. Everyone should have the
            right to get a blood transfusion.
          </JoinTheCauseP>
        </JoinTheCauseContainer>
      </>
    );
  }
}

export default JoinTheCause;
