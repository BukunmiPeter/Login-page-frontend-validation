import React, { useState } from "react";
import { validEmail, validPassword } from "./Regex";
import Layout from "./Layout";
import "./Signin.css";

function Signin() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [successmsg, setSuccessmg] = useState(false);
  const validate = (event) => {
    event.preventDefault();
    setEmailErr(false);
    setPwdError(false);
    if (!validEmail.test(details.email)) {
      setEmailErr(true);
      setDetails({ ...details, email: "" });
      setDetails({ ...details, password: "" });
    }
    if (!validPassword.test(details.password)) {
      setPwdError(true);
      setDetails({ ...details, email: "" });
      setDetails({ ...details, password: "" });
    }

    if (
      validEmail.test(details.email) &&
      validPassword.test(details.password)
    ) {
      setSuccessmg(true);
    }
  };
  return (
    <>
      <Layout />
      <div className="form-container">
        <form className="register-form" onSubmit={validate}>
          {successmsg && <p className="Success-text">login successful!</p>}
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />

          <button className="form-field" type="submit">
            login
          </button>

          {emailErr && <span>Your email is invalid</span>}
          {pwdError && <span>Your password is invalid</span>}
        </form>
      </div>
    </>
  );
}

export default Signin;
