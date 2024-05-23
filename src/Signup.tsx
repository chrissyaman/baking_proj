import React, { useState } from "react";
import "./style.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(userCredential);
        console.log("User with email " + user.email + " created!");
        // Note: Have to update account with username after creation
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div id="signup-div" className="signup-login-div">
      <input
        id="signup-username"
        className="signup-login-input"
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        id="signup-email"
        className="signup-login-input"
        type="email"
        placeholder="email address"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        id="signup-password"
        className="signup-login-input"
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="signup-login-button" onClick={signupUser}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
