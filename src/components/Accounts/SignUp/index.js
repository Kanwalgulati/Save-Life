import React, { useState } from "react";
import { Marginer } from "../Marginer";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  BoldLink,
} from "../CommonElements";
import "./signup.css";
import { auth, db, storage } from "../../../Config/FireBase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img for="photo-upload" src={src} />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

export function SignUp({ setToggleScope }) {
  let [getFile, setFile] = useState(null);
  let [getFirstName, setFirstName] = useState("");
  let [getLastName, setLastName] = useState("");
  let [getEmail, setEmail] = useState("");
  let [getPassword, setPassword] = useState("");
  let [getConfirmPassword, setConfirmPassword] = useState("");
  let [getConfirmPasswordError, setConfirmPasswordError] = useState("");
  let [imagePreviewUrl, setImagePreviewUrl] = useState(
    "https://www.ocduk.org/wp-content/uploads/2019/02/DefaultUser-Purple.jpg"
  );
  let [getEmailError, setEmailError] = useState("");
  let [getFirstNameError, setFirstNameError] = useState("");
  let [getLastNameError, setLastNameError] = useState("");
  let [getPasswordError, setPasswordError] = useState("");
  const updateFirstName = (E) => {
    setFirstName(E.target.value);
  };
  const updateLastName = (E) => {
    setLastName(E.target.value);
  };
  const updateEmail = (E) => {
    setEmail(E.target.value);
  };
  const updatePassword = (E) => {
    setPassword(E.target.value);
  };
  const updateConfirmPassword = (E) => {
    setConfirmPassword(E.target.value);
  };
  //Validate Data

  const validateFirstName = (firstName) => {
    if (firstName.length < 1) {
      setFirstNameError("First Name cannot be empty");
      return false;
    } else {
      setFirstNameError("");
      return true;
    }
  };
  const validateLastName = (lastName) => {
    if (lastName.length < 1) {
      setLastNameError("Last Name cannot be empty");
      return false;
    } else {
      setLastNameError("");
      return true;
    }
  };
  const validateEmail = (email) => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmailError("Email should be Valid");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError("Password should be Minimum 8 Character long");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };
  const validateConfirmPassword = (e) => {
    if (getPassword !== e.target.value) {
      console.log("Function Called");
      setConfirmPasswordError("Password Doesn't Match");
    }
  };
  const clearErrorMessage = (e) =>{
    setConfirmPasswordError('');
  }
  const validateUserAndSubmit = (E) => {
    const registeredUser = {
      email: getEmail,
      password: getPassword,
      firstname: getFirstName,
      lastname: getLastName,
    };
    if (
      validateFirstName(registeredUser.firstname) &&
      validateLastName(registeredUser.lastname) &&
      validateEmail(registeredUser.email) &&
      validatePassword(registeredUser.password)
    ) {
      if (getFile) {
        const uploadTask = storage.ref(`/images/${getFile.name}`).put(getFile);
        if (getFile === "") {
          console.error(`not an image, the image file is a ${typeof getFile}`);
        }
        uploadTask.on(
          "state_changed",
          (snapShot) => {
            console.log(snapShot);
          },
          (err) => {
            console.log(err);
          },
          () => {
            storage
              .ref("images")
              .child(getFile.name)
              .getDownloadURL()
              .then((fireBaseUrl) => {
                auth
                  .createUserWithEmailAndPassword(getEmail, getPassword)
                  .then((cred) => {
                    db.collection("users").doc(cred.user.uid).set({
                      name: getFirstName,
                      lastName: getLastName,
                      email: getEmail,
                      password: getPassword,
                      profileImage: fireBaseUrl,
                    });
                  })
                  .then(() => {
                    toast.success("User Registered", {
                      position: "top-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  })
                  .catch(() => {
                    console.log("Alreadyyyyyyyyyyyyy");
                    toast.warning("Already Registered", {
                      position: "top-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  });
              })
              .catch(() => {
                toast.error("User Registration Error", {
                  position: "top-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
          }
        );
      } else {
        auth
          .createUserWithEmailAndPassword(getEmail, getPassword)
          .then((cred) => {
            db.collection("users").doc(cred.user.uid).set({
              name: getFirstName,
              lastName: getLastName,
              email: getEmail,
              password: getPassword,
              profileImage: imagePreviewUrl,
            });
          })
          .then(() => {
            toast.success("User Registered", {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch(() => {
            toast.warning("Already Registered", {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      }
    }
  };

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  // const checkFirstName = () =>{}
  return (
    <BoxContainer>
      <FormContainer>
        <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
        <Input
          type="firstName"
          placeholder="First Name"
          onChange={updateFirstName}
          // onBlur={checkFirstName}
        />
        {getFirstNameError}
        <Input
          type="lastName"
          placeholder="Last Name"
          onChange={updateLastName}
        />
        {getLastNameError}
        <Input type="email" placeholder="Email" onChange={updateEmail} />
        {getEmailError}
        <Input
          type="password"
          placeholder="Password"
          onChange={updatePassword}
        />
        {getPasswordError}
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={updateConfirmPassword}
          onBlur={validateConfirmPassword}
          onFocus={clearErrorMessage}
        />
        {getConfirmPasswordError}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={validateUserAndSubmit}>
        SignUp
      </SubmitButton>
      <ToastContainer />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already Have a Account?{" "}
        <BoldLink onClick={setToggleScope}>SingIn</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
