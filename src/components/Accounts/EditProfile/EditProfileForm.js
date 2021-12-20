import React, { useState } from "react";
import { Marginer } from "../Marginer";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "../CommonElements";
import "../SignUp/signup.css";
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

export function EditProfileForm({ userData , getUserId }) {
  console.log("Tokennnn ::: ",getUserId);
  const { name = "", lastName = "", email = "", password = "" } =
    userData || "";
  const { profileImage } = userData || "";
  let [getFile, setFile] = useState("");
  let [getFirstName, setFirstName] = useState(name);
  let [getLastName, setLastName] = useState(lastName);
  let [getEmail, setEmail] = useState(email);
  let [getPassword, setPassword] = useState(password);
  let [getConfirmPassword, setConfirmPassword] = useState("");
  let [getConfirmPasswordError, setConfirmPasswordError] = useState("");
  let [imagePreviewUrl, setImagePreviewUrl] = useState(profileImage);
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
      const uploadTask = storage
        .ref(`/images/${getFile.name}`)
        .put(getFile);
      if (getFile === "") {
        console.error(
          `not an image, the image file is a ${typeof getFile}`
        );
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
              db.collection("users").doc(getUserId).set({
                name: getFirstName,
                lastName: getLastName,
                email: getEmail,
                password: getPassword,
                profileImage: fireBaseUrl,
              });
            })
            .then((callback) => {
              // history.push("/profile");
              // handleCloseProfile();
              toast.success("Profile Updated Successfully", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              });
            })
            .catch((err) => {
              toast.error(`${err}`, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
        }
      );
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
  return (
    <BoxContainer>
      <FormContainer>
        <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
        <Input
          type="firstName"
          placeholder="First Name"
          onChange={updateFirstName}
          value={getFirstName}
        />
        {getFirstNameError}
        <Input
          type="lastName"
          placeholder="Last Name"
          onChange={updateLastName}
          value={getLastName}
        />
        {getLastNameError}
        <Input
          type="email"
          placeholder="Email"
          onChange={updateEmail}
          value={getEmail}
        />
        {getEmailError}
        <Input
          type="password"
          placeholder="Password"
          onChange={updatePassword}
          value={getPassword}
        />
        {getPasswordError}
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={updateConfirmPassword}
          onBlur={validateConfirmPassword}
          value={getPassword}
        />
        {getConfirmPasswordError}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={validateUserAndSubmit}>
        Save
      </SubmitButton>
      <ToastContainer />
    </BoxContainer>
  );
}

export default EditProfileForm;
