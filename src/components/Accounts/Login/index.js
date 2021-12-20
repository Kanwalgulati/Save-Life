import React, { useState } from "react";
import { Marginer } from "../Marginer";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  BoldLink,
  GoogleLink,
  ForgotPasswordInput,
  BoldErrorLink,
  BoldForgotText,
  BoldForgotLinkText,
} from "../CommonElements";
import firebase from "firebase/app";
import { FaGooglePlusG } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { auth } from "../../../Config/FireBase";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import "./login.css";
import LodingHeart from "../../../images/heart.svg";

export function Login({ setToggleScope }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const history = useHistory();
  const [getValidUser, setValidUser] = useState(false);
  const [getResetPasswordError, setResetPasswordError] = useState("");
  const [getForgotEmail, setForgotEmail] = useState("");
  const [getLoadingStatus, setLoadingStatus] = useState(false);
  const updateForgotEmail = (e) => {
    setForgotEmail(e.target.value);
    setResetPasswordError("");
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const checkEmail = (e) => {
    e.preventDefault();
    setLoadingStatus(true);
    auth
      .createUserWithEmailAndPassword(getForgotEmail, "dummyText")
      .then(() => {
        setTimeout(() => {
          setLoadingStatus(false);
          setResetPasswordError("Email Account Not Exist");
        }, 2000);
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          setTimeout(() => {
            auth.sendPasswordResetEmail(getForgotEmail).then(() => {
              setLoadingStatus(false);
              setValidUser(!getValidUser);
            });
          }, 2000);
        } else {
          setTimeout(() => {
            setLoadingStatus(false);
            setResetPasswordError("Email Account Not Exist");
          }, 2000);
        }
      });
  };
  const authenticateUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        toast.success("Welcome again", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { zIndex: 555 },
        });
        history.push("/");
      })
      .catch((err) => {
        toast.error(`${err}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      history.replace("/");
      toast.success("Login Successful", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { zIndex: 500 },
      });
    });
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={updateEmail} />
        <Input
          type="password"
          placeholder="Password"
          onChange={updatePassword}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Popup trigger={<div>Forget your password?</div>} modal nested>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Forgot Password </div>
            <div className="content">
              {" "}
              <BoldLink>Enter Your Email </BoldLink>
              <br />
              <ForgotPasswordInput
                type="email"
                placeholder="Email"
                onChange={updateForgotEmail}
              />
              <br />
              <BoldErrorLink>{getResetPasswordError}</BoldErrorLink>
            </div>
            <div className="actions">
              <SubmitButton onClick={checkEmail}>
                Get Reset Password Link
              </SubmitButton>
              <br />
              {getLoadingStatus ? (
                <div className="heart">
                  <img src={LodingHeart} />
                </div>
              ) : null}
              <Popup open={getValidUser} position="top center" nested modal>
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="content">
                    {" "}
                    <BoldForgotText>Email Send Successfully</BoldForgotText>
                    <BoldForgotLinkText>
                      Please Check Your Email for Password Reset Link
                    </BoldForgotLinkText>
                    <SubmitButton style={{ marginTop: 20 }} onClick={close}>
                      Got It
                    </SubmitButton>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        )}
      </Popup>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={authenticateUser}>
        Sign In
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink onClick={setToggleScope}>Signup</BoldLink>
      </MutedLink>
      <GoogleLink onClick={signInWithGoogle}>
        <FaGooglePlusG /> Login With Google
      </GoogleLink>
    </BoxContainer>
  );
}
