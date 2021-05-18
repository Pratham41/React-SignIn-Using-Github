import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";


export default function Login() {

    const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };



  return (
    <div className="container main-box my-5 py-5">
      <div className="login-buttons text-center">
        <img
          className="login-icon my-4 "
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
        ></img>
        <h1 className="login-heading my-4 ">Welcome to Todo-App</h1>

        <div className="container button-box">
        <button className="login-provider-button my-4" onClick={signIn}>
          <span>Continue with GitHub</span>
        </button>
        </div>
      </div>
    </div>
  );
}
