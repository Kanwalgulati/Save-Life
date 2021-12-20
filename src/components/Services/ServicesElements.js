import styled from "styled-components";
export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 1200px;
  }
  @media screen and (max-width: 480px) {
    height: 1200px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 240px;
  padding: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ServicesIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
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
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ServicesH3 = styled.h3`
  color: #5c5c74;
  text-align:center;
  width: 40%;
  font-size: 1rem;
  line-height:1.3rem;
  margin-bottom: 10px;
  margin-bottom: 35px;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #5c5c74;
`;
