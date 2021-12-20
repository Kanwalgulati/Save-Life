import styled from "styled-components";
export const JoinTheCauseContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f0ede4;
  align-items: center;
`;
export const JoinTheCauseH1 = styled.h1`
  font-size: 3rem;
  color: #ff3f62;
  margin-bottom: 44px;
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    margin-top: 80px;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 20px;
  }
`;
export const JoinTheCauseP = styled.h3`
  color: #5c5c74;
  text-align: center;
  width: 40%;
  font-size: 1rem;
  line-height: 1.3rem;
  margin-bottom: 10px;
  margin-bottom: 35px;
`;
export const JoinTheCauseIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;
