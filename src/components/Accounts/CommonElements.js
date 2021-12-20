import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 15px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 15px;
  color: rgb(247, 99, 127);
  font-weight: 700;
  text-decoration: none;
  /* margin: 0 4px; */
`;
export const BoldForgotText = styled.div`
  font-size: 35px;
  color: rgb(247, 99, 127);
  font-weight: 800;
`;
export const BoldForgotLinkText = styled.div`
  font-size: 20px;
  color: rgb(247, 99, 127);
  font-weight: 600;
  margin-top: 80px;
`;
export const BoldErrorLink = styled.a`
  font-size: 10px;
  color: red;
  font-weight: 300;
  text-decoration: none;
  /* margin: 0 4px; */
`;
export const ForgotPasswordInput = styled.input`
  width: 60%;
  height: 40px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  margin-top: 10px;
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(247, 99, 127);
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(247, 99, 127);
  }
`;

export const SubmitButton = styled.button`
  width: 50%;
  padding: 11px 4%;
  align-items: center;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  text-align: center;
  background: rgb(247, 99, 127);
  background: linear-gradient(
    58deg,
    rgba(236, 142, 161, 1) 0%,
    rgba(247, 99, 127, 1) 31%,
    rgba(237, 78, 108, 1) 100%
  );
  &:focus {
    outline: none;
  }
  &:hover {
    padding: 11px 4%;
    background: #fff;
    color: rgb(247, 99, 127);
    border: 1px solid #aaa;
  }
`;
export const GoogleLink = styled.button`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin-top: 20px;
  padding: 11px 4%;
  align-items: center;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  text-align: center;
  background: rgb(247, 99, 127);
  &:focus {
    outline: none;
  }
  &:hover {
    padding: 11px 4%;
    background: #fff;
    color: rgb(247, 99, 127);
    border: 1px solid #aaa;
  }
`;
export const AccountsImage = styled.img`
  height: 60%;
  width: 60%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
