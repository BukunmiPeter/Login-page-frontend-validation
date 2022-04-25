import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo2 from "./images/logo2.jpg";

function UserHome() {
  return (
    <>
      <nav className="nav-bar">
        <img src={logo2} alt="" className="logo" />
        <ul className="nav-ul ">
          <li className="nav-list">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-list">
            <Link className="link" to="/About">
              About
            </Link>
          </li>

          <li className="nav-list">
            <Link className="link" to="/Home">
              SignOut
            </Link>
          </li>
        </ul>
      </nav>

      <div>USER HOME</div>
    </>
  );
}

export default UserHome;
