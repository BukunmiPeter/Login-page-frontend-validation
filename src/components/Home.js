import React from "react";
import Layout from "./Layout";

import "./Home.css";

function Home() {
  return (
    <>
      <header>
        <div>
          <Layout />
        </div>
      </header>

      <div>
        <h1 className="texth1">
          Hello, welcome to this mini website, signup and login to see more!
        </h1>
      </div>
    </>
  );
}

export default Home;
