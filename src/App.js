import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/signup";
import Error from "./components/Error";
import Home from "./components/Home";
import Dashbord from "./components/Dashbord";
import About from "./components/About";
import UserHome from "./components/UserHome";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/About" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/Signin" element={<Signin />} />
        <Route element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
