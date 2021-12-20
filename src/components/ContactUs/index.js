import React, { useState } from "react";
import "../../App.css";
import { db } from "../../Config/FireBase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { FormContainer } from "../Accounts/CommonElements";
import { Button, TextField } from "@material-ui/core";

toast.configure();
function ContectUs() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [feedback, setFeedback] = useState("");

  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const submit1 = (e) => {
    e.preventDefault();
    const obj1 = {
      username: username,
      email: email,
      feedback: feedback,
    };

    db.collection("contects")
      .doc()
      .set(obj1)
      .then((result) => {
        console.log(result);
        toast.info("Problem Recorded ", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEmail("");
        setFeedback("");
        setUsername("");
      })
      .catch((err) => {
        console.log("1111111111111", err);
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
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <form
        style={{
          height: "400px",
          width: "400px",
          alignContent: "space-between",
          justifyContent: "space-between",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft:400,
          border: '2px solid gray',
          padding: 50,
          borderRadius:5,
          marginTop:30,
          marginBottom:30,
        }}
        onSubmit={submit1}
      >
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <p className="h5 text-justify mb-4">Write to us</p>
          <div className="grey-text">
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              id="standard-secondary"
              label="Name"
              color="secondary"
              style={{width:300}}
            />
            <TextField
              inputProps={{
                form: {
                  autocomplete: "off",
                },
              }}
              onChange={onchangeEmail}
              id="standard-secondary"
              label="Email"
              color="secondary"
              style={{width:300}}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
              value={feedback}
              style={{width:300}}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <div className="text-center" style={{ alignSelf: "center" ,marginTop:40,marginRight:90,width:100}}>
            <Button color="secondary" variant="contained" type="submit">
              {" "}
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContectUs;
