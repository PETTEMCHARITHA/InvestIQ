import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/INVestIQ.png"; 
import './Home.css';// Update the path to your logo file
import { useNavigate } from 'react-router-dom';

const Navbar = () =>  {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/'); // Redirect to the login page
  };
  return (
    <div id="box3">
      <div id="container">
        {/* Logo and branding */}
        <div id="logo">
          <img src={logo} alt="Logo" />
          <h1>InvestIQ</h1>
        </div>

        {/* Navigation menu */}
        <div id="menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/stock-prediction">Prediction</Link>
            </li>
            <li><Link to="/about">Contact</Link>
            </li>
          </ul>
          {/* Logout button */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
