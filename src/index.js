import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/UI/navbar-component/NavBar";
import Home from "./components/pages/home-page/Home";
import AboutUs from "./components/pages/about-us-page/AboutUs";
import Roadmap from "./components/pages/roadmap-page/Roadmap";
import Team from "./components/pages/team-page/Team";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Footer from "./components/UI/footer-component/Footer";



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>

    <App />

    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
