import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { db } from "../../Config/FireBase";

import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

function Volunteers(props) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    db.collection("SaveSomeonesLife").onSnapshot((result) => {
      setArr(result.docs);
    });
  }, []);

  return (
    <div className="view_req_box">
      <h1>Super Heros</h1>
      {arr.length > 0 ? (
        <table>
          <tr>
            <th>User Name</th>
            <th>Gender</th>
            <th>City</th>
            <th>Age</th>
            <th>Email</th>
            <th>Blood Group</th>
          </tr>

          {arr.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.data().name} </td>
                  <td>{item.data().gender} </td>
                  <td>{item.data().city} </td>
                  <td>{item.data().age} </td>
                  <td>{item.data().email} </td>
                  <td>{item.data().blood_group}</td>
                </tr>
              </>
            );
          })}
        </table>
      ) : (
        <CircularProgress className="viewRequestLoader" color="secondary" />
      )}
    </div>
  );
}

export default Volunteers;
