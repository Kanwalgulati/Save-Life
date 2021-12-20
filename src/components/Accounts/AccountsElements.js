import styled from "styled-components";
export const BoxContainer = styled.div`
  width: 390px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-top:50px;
  margin-bottom:50px;
`;
export const BackDrop = styled.div`
  width: 120%;
  height: 550px;
  position: absolute;
  top: -290px;
  left: -70px;
  transform: rotate(60deg);
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  background: rgb(236, 142, 161);
  background: linear-gradient(
    58deg,
    rgba(236, 142, 161, 1) 0%,
    rgba(247, 99, 127, 1) 31%,
    rgba(237, 78, 108, 1) 100%
  );
`;
export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
export const AccountsContainer = styled.div`
  background: #f0ede4;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap-reverse;
    padding-top: 50px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
`;
export const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 8px;
`;
export const TitleImg = styled.img`
  height: 60px;
  width: 70px;
  z-index: 10;
  justify-content: center;
  align-self: center;
`;
export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.8em;
`;