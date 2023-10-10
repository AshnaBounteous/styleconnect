import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const Login = () => {
  const logger = require("pino")();
  const [loggedIn, setLoggedIn] = useState(false);
  const [associateId, setAssociateId] = useState("");

  const handleLogin = () => {
    if (associateId.length === 6) {
      setLoggedIn(true);
    } else {
      logger.error("Inavlid Input");
    }
  };

  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    if (inputValue.length > 6) {
      inputValue = inputValue.slice(0, 6);
    }
    inputValue.length === 6 && setLoggedIn(true);
    setAssociateId(inputValue);
  };

  return (
    <>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <div className="p-3 text-start">
          <h2 className="fs-1 fw-semibold mb-5">Log in</h2>
          <div className="my-5">
            <label className="mt-5 d-block" htmlFor="numberInput">
              Associate ID:
            </label>
            <input
              className="w-100 py-2 border-0 border-bottom border-black mb-5"
              type="number"
              name="associateId"
              value={associateId}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="btn btn-dark btn-custom-black w-100 text-center fw-bold fs-5 py-2"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
