import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import AboutUs from './components/AboutUs.js';
import Roadmap from './components/Roadmap.js';
import Team from './components/Team.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Roadmap" element={<Roadmap/>} />
        <Route path="/Team" element={<Team/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();