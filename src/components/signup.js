import React, { useState } from "react";
import { validEmail, validPassword } from "./Regex";
import "./signup.css";
import axios from "axios";
import Layout from "./Layout";

function Signup() {
  const [details, setDetails] = useState({
    name: "",
    gender: "",
    governmentissuedid: "",
    phone: "",
    profession: "",
    email: "",
    password: "",
  });
  console.log(details);
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

    axios
      .get(
        "http://localhost:3001/Signin?email=" +
          details.email +
          "&password=" +
          details.password
      )
      .then((res) => {
        if (res.data) {
          alert("user already registered");
        } else {
          axios
            .post("http://localhost:3001/Signup", details)
            .then(function (response) {
              console.log(response);
            });
        }
      });
  };
  return (
    <>
      <Layout />
      <div className="form-container">
        <form className="register-form" onSubmit={validate}>
          {successmsg && <p className="Success-text">login successful!</p>}
          <div className="formfield1">
            <input
              type="text"
              placeholder="Full name"
              className="form-field"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />

            {/* <input
            type="text"
            placeholder="Lastname"
            className="form-field"
            value={details.lname}
            onChange={(e) => setDetails({ ...details, lname: e.target.value })}
          /> */}
            <input
              type="text"
              placeholder="Gender"
              className="form-field"
              value={details.gender}
              onChange={(e) =>
                setDetails({ ...details, gender: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Profession"
              className="form-field"
              value={details.profession}
              onChange={(e) =>
                setDetails({ ...details, profession: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Government issued Id Number"
              className="form-field"
              value={details.governmentissuedid}
              onChange={(e) =>
                setDetails({ ...details, governmentissuedid: e.target.value })
              }
            />
          </div>

          <div className="formfield2">
            <input
              type="number"
              placeholder="Phone"
              className="form-field"
              value={details.phone}
              onChange={(e) =>
                setDetails({ ...details, phone: e.target.value })
              }
            />
            <input
              className="form-field"
              type="text"
              placeholder="Email"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
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
          </div>

          {emailErr && <span>Your email is invalid</span>}
          {pwdError && <span>Your password is invalid</span>}
        </form>
      </div>
    </>
  );
}

export default Signup;
