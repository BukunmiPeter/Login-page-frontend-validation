import React from "react";
import "./about.css";
import Layout from "./Layout";

function About() {
  return (
    <>
      <Layout />

      <div>
        <h4 className="text233">
          This mini website shows a typical connection between the frontend and
          backend of the web development. User routes to a dashboard where he
          receives a warm welcoming message when he signs up and logs in. <br />
          User can sign out to return to the main home page or delete his
          registered account on the dashboard. <br />
          Only a registered user can login. <br /> User password must contain
          atleast an upper case character <br /> atleast a lower case character
          ,<br /> atleast a digit <br /> atleast a non word character <br />
          minimum of 8 characters be case sensitive
        </h4>

        <h5 className="text4545">
          Tools used: Reactjs, Nodejs, Express, Mysql{" "}
        </h5>
      </div>
    </>
  );
}

export default About;
