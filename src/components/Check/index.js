import React from "react";
import { BoldErrorLink } from "../Accounts/CommonElements";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
export default function Check() {
  const popup = () => {
      console.log("Popup")
    toast.success("Welcome again", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("Popppppppp")
  };
  return (
    <>
      <BoldErrorLink onClick={popup}>Toogle</BoldErrorLink>
      <ToastContainer/>
    </>
  );
}
