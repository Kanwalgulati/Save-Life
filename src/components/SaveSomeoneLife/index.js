import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import request from "../../images/image3.svg";
import { db } from "../../Config/FireBase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../main.css";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

function SaveSomeoneLife() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState();
  const [blood_group, setBlood_group] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState("");
  const history = useHistory();

  const submit1 = (e) => {
    e.preventDefault();
    const obj1 = {
      name: name,
      age: age,
      blood_group: blood_group,
      gender: gender,
      mobile: mobile,
      email: email,
      city: city,
    };
    db.collection("SaveSomeonesLife")
      .doc()
      .set(obj1)
      .then((callback) => {
        history.push("/");
        toast.info("Data Submitted", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error(`${err}`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className="login request">
      <Card variant="outlined">
        <CardContent>
          <h1>
            <img src={request} alt="request" className="logo4" /> Become A Hero
          </h1>
          <form onSubmit={submit1}>
            <p>
              {" "}
              <TextField
                onChange={(e) => setName(e.target.value)}
                id="standard-secondary"
                label="Name"
                color="secondary"
              />
            </p>
            <p style={{ paddingTop: 20 }}>
              Gender{" "}
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="Male"
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio color="secondary" />}
                  label="Male"
                  labelPlacement="Male"
                  onFocus={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio color="secondary" />}
                  label="Female"
                  labelPlacement="Female"
                  onFocus={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </RadioGroup>
            </p>
            <p>
              <TextField
                onChange={(e) => setAge(e.target.value)}
                id="standard-secondary"
                label="Age"
                color="secondary"
              />
            </p>
            <p style={{ paddingTop: 10 }}>
              <TextField
                onChange={(e) => setMobile(e.target.value)}
                id="standard-secondary"
                label="Mobile No."
                color="secondary"
              />
            </p>
            <p style={{ paddingTop: 20 }}>
              <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: 200 }}
                value={blood_group}
                onChange={(e) => {
                  setBlood_group(e.target.value);
                }}
              >
                <MenuItem value={"A+"}>A+</MenuItem>
                <MenuItem value={"A-"}>A-</MenuItem>
                <MenuItem value={"B+"}>B+</MenuItem>
                <MenuItem value={"B-"}>B-</MenuItem>
                <MenuItem value={"AB+"}>AB+</MenuItem>
                <MenuItem value={"AB-"}>AB-</MenuItem>
                <MenuItem value={"O+"}>O+</MenuItem>
                <MenuItem value={"O-"}>O-</MenuItem>
              </Select>
            </p>
            <p style={{ paddingTop: 10 }}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                id="standard-secondary"
                label="Email"
                color="secondary"
              />
            </p>
            <p></p>
            <p style={{ paddingTop: 10 }}>
              <TextField
                onChange={(e) => setCity(e.target.value)}
                id="standard-secondary"
                label="Address"
                color="secondary"
              />
            </p>
            <Button color="secondary" variant="contained" type="submit">
              {" "}
              Save Life
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SaveSomeoneLife;
