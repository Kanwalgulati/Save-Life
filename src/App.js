import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import { auth, db } from "./Config/FireBase";
import Accounts from "./components/Accounts";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import EditProfile from "./components/Accounts/EditProfile";
import RequestBlood from "./components/RequestBlood";
import View_request from "./components/ViewRequest";
import Camp from "./components/Camp";
import CollectBlood from "./components/CollectBlood";
import ContectUs from "./components/ContactUs";
import LiveCovidCases from "./components/LiveCovidCases";
import { Login } from "./components/Accounts/Login";
import UserContactedUs from "./components/UserContactedUs";
import SaveSomeoneLife from "./components/SaveSomeoneLife";
import Volunteers from "./components/Volunteers";
import MyHistory from "./components/MyHistory";
const UserContext = createContext();
function App() {
  const [auth2, setAuth2] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [getUserData, setUserData] = useState();
  const [userdetails, setUserdetails] = useState({});
  const [getUserId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let { emailVerified } = user;
        if (emailVerified) {
          setAuth2(true);
        }
        db.collection("users")
          .doc(user.uid)
          .onSnapshot((snapshoot) => {
            setLoading(false);
            if (snapshoot.data()) {
              setUserData(snapshoot.data());
              setAuth2(true);
              if (snapshoot.data().email === "kanwal@gmail.com") {
                setAdmin(true);
              } else {
                setAdmin(false);
              }
            }
            setUserdetails(snapshoot.data());
            setUserId(user.uid);
          });
      } else {
        setLoading(false);
        setAuth2(false);
      }
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ToastContainer />
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar
          toggle={toggle}
          auth={auth2}
          admin={admin}
          userData={getUserData}
        />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Accounts} />
          <Route path="/covid" component={LiveCovidCases} />
          <Route path="/userContactedUs" component={UserContactedUs} />
          <Route path="/volunteers" component={Volunteers} />
          <Route
            path="/MyHistory"
            component={() => {
              return <MyHistory getUserId={getUserId} />;
            }}
          />
          <Route
            path="/editProfile"
            component={() => {
              return (
                <EditProfile userData={getUserData} getUserId={getUserId} />
              );
            }}
          />
          <Route
            path="/SaveSomeoneLife"
            component={() => {
              return <SaveSomeoneLife />;
            }}
          />

          <Route
            path="/requestBlood"
            component={() => {
              return (
                <RequestBlood
                  auth={auth2}
                  admin={admin}
                  userData={getUserData}
                  getUserId={getUserId}
                />
              );
            }}
          />
          <Route
            path="/viewRequest"
            component={() => {
              return (
                <View_request
                  auth={auth2}
                  admin={admin}
                  userData={getUserData}
                  getUserId={getUserId}
                />
              );
            }}
          />
          <Route
            path="/Camp"
            component={() => {
              return (
                <Camp
                  auth={auth2}
                  admin={admin}
                  userData={getUserData}
                  getUserId={getUserId}
                />
              );
            }}
          />
          <Route
            path="/collect_blood"
            component={() => {
              return (
                <CollectBlood
                  auth={auth2}
                  admin={admin}
                  userData={getUserData}
                  getUserId={getUserId}
                />
              );
            }}
          />
          <Route
            path="/ContactUs"
            component={() => {
              return (
                <ContectUs
                  auth={auth2}
                  admin={admin}
                  userData={getUserData}
                  getUserId={getUserId}
                />
              );
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
export { UserContext };
