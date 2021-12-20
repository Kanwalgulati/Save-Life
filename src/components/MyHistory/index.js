import React, { useEffect, useState } from "react";
import "../../App.css";
import { db, storage } from "../../Config/FireBase";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import UpdateSharpIcon from "@material-ui/icons/UpdateSharp";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { toast } from "react-toastify";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { DialogTitle } from "@material-ui/core";

export default function MyHistory({ getUserId }) {
    console.log('UserrrrrrrrrrrrId : ::',getUserId)
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  //new dialog area
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [blood_group, setBlood_group] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [date, setDate] = useState();
  const [token, setToken] = useState();

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
      date: date,
      user_id: getUserId,
    };
    db.collection("user_request")
      .doc(token)
      .set(obj1)
      .then((callback) => {
        history.push("/MyHistory");
        handleClose();
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
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (values) => {
    setToken(values);
    setOpen(true);
    db.collection("user_request")
      .doc(values)
      .get()
      .then((doc) => {
        setName(doc.data().name);
        setAge(doc.data().age);
        // setDate(doc.data().date);
        setEmail(doc.data().email);
        setGender(doc.data().gender);
        setMobile(doc.data().mobile);
        setBlood_group(doc.data().blood_group);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [arr, setArr] = useState([]);
  var arr1 = [];
  useEffect(() => {
    db.collection("user_request").onSnapshot((result) => {
      const temp = [];
      result.docs.forEach((doc) => temp.push({ ...doc.data(), id: doc.id }));
      console.log(temp);
      setArr(temp);
    });
  }, []);
  arr.map((doc) => {
    console.log("Doc :: ", doc.user_id);
    console.log("UserUd :: ", getUserId);
    if (doc.user_id === getUserId) {
      arr1.push(doc);
    }
  });
  const delete_item = (values) => {
    db.collection("user_request")
      .doc(values)
      .delete()
      .then(() => {
        toast.info("deleted Successfully", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div>
      <Card variant="outlined" className="profile_left">
        <CardContent>
          <div>
            <h1>Your Requests</h1>
            <hr />
            {arr1.length > 0 ? (
              <table>
                <tr>
                  <th>Firstname</th>
                  <th>Age</th>
                  <th>Blood Group</th>
                  <th>Gender</th>
                  <th>Contact No.</th>
                  <th>Email</th>
                  <th>Till Date</th>
                </tr>
                {arr1.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.blood_group}</td>
                      <td>{item.gender}</td>
                      <td>{item.mobile}</td>
                      <td>{item.email}</td>
                      <td>{item.date}</td>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() => delete_item(item.id)}
                          aria-label="delete"
                        >
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Update">
                        <IconButton
                          onClick={() => handleClickOpen(item.id)}
                          aria-label="Update"
                        >
                          <UpdateSharpIcon />
                        </IconButton>
                      </Tooltip>
                    </tr>
                  );
                })}
              </table>
            ) : (
              <h4>You do not have any request yet </h4>
            )}

            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Update Request
              </DialogTitle>
              <DialogContent dividers>
                {/* update profile html */}
                <form onSubmit={submit1}>
                  <p>
                    {" "}
                    Name{" "}
                    <input
                      className="name"
                      type="text"
                    //   onChange={(e) => setName(e.target.value)}
                    //   value={name}
                      required
                    />
                  </p>
                  <p>
                    Gender{" "}
                    <select
                      className="select_gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>none</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>{" "}
                  </p>
                  <p>
                    Age{" "}
                    <input
                      onChange={(e) => setAge(e.target.value)}
                      value={age}
                      className="age"
                      type="number"
                      required
                    />
                  </p>
                  <p>
                    Mobile No.{" "}
                    <input
                      onChange={(e) => setMobile(e.target.value)}
                      className="mobile"
                      value={mobile}
                      type="tel"
                    />
                  </p>
                  <p>
                    Blood group
                    <select
                      className="select_bloodgroup"
                      onChange={(e) => setBlood_group(e.target.value)}
                      value={blood_group}
                      required
                    >
                      <option>select</option>
                      <option value="A+">AB+</option>
                      <option value="A-">AB+</option>
                      <option value="B+">AB+</option>
                      <option value="B-">AB+</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="o+">o+</option>
                      <option value="o-">o-</option>
                    </select>
                  </p>
                  <p>
                    Email{" "}
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="name"
                      value={email}
                      type="email"
                      required
                    />
                  </p>
                  <p>
                    Till date{" "}
                    <input
                      onChange={(e) => setDate(e.target.value)}
                      className="select_gender"
                      type="date"
                      value={date}
                      required
                    />
                  </p>

                  <Button color="secondary" variant="contained" type="submit">
                    {" "}
                    Update
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
      ;
    </div>
  );
}
