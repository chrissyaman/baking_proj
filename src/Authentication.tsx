import React, { useState } from "react";
import "./style.css";
import Login from "./Login";
import Signup from "./Signup";
import { Typography } from "@material-tailwind/react";

function Authentication({ setWhichPage, setCurrentUser }) {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="w-full">
      <div className="w-[100%]">
        {active === "login" ? (
          <Login setWhichPage={setWhichPage} setCurrentUser={setCurrentUser} />
        ) : (
          <Signup setWhichPage={setWhichPage} setCurrentUser={setCurrentUser} />
        )}{" "}
        <Typography
          variant="small"
          color="gray"
          className="text-center font-normal"
        >
          {active === "login" ? (
            <>
              Not registered?{" "}
              <button
                onClick={handleChange}
                className="font-medium text-gray-900"
              >
                Create an Account
              </button>
            </>
          ) : (
            <>
              Have an account?{" "}
              <button
                onClick={handleChange}
                className="font-medium text-gray-900"
              >
                Log in
              </button>
            </>
          )}
        </Typography>
      </div>
    </div>
  );
}

export default Authentication;