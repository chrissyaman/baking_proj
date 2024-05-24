import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "./firebase.js";

function Signup({ setWhichPage, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user with email " + user.email + " created!");

        updateProfile(user, { displayName: username }).then(() => {
          console.log(user.displayName);
          setCurrentUser(user);
          setWhichPage(1);
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className="grid place-items-center p-2">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign Up
        </Typography>
        <form className="max-w-[24rem] mx-auto text-left">
          <div className="mb-6">
            <Input
              id="username"
              color="gray"
              size="lg"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Your username"
              value={username}
            />
          </div>
          <div className="mb-6">
            <Input
              id="email"
              color="gray"
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@mail.com"
              value={email}
            />
          </div>
          <div className="mb-6">
            <Input
              id="password"
              color="gray"
              size="lg"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your password"
              value={password}
            />
          </div>
            <button onClick={handleSignup}>
              Sign Up
            </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;