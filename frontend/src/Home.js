import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import logo from './images/INVestIQ.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="main">
      <div id="box1"></div>
      <div id="box2">
        <div id="text">
          START SMALL
          <br />
          DREAM BIG
        </div>
        </div>
    
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
                <Link to="/dashboard">Dashboard</Link>
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
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
// import "./Home.css";
// import logo from "./images/INVestIQ.png";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   // React Intersection Observer hook
//   const { ref: tradingViewRef, inView: tradingViewInView } = useInView({
//     threshold: 0.2, // Trigger animation when 20% of the section is visible
//     triggerOnce: true, // Trigger animation only once
//   });

//   const handleLogout = () => {
//     navigate("/"); // Redirect to the login page
//   };

//   return (
//     <div className="main">
//       {/* Home Section */}
//       <section id="homeSection">
//         <div id="box1"></div>
//         <div id="box2">
//           <div id="text">
//             START SMALL
//             <br />
//             DREAM BIG
//           </div>
//         </div>

//         {/* Logo and Navigation Section */}
//         <div id="box3">
//           <div id="container">
//             <div id="logo">
//               <img src={logo} alt="Logo" />
//               <h1>InvestIQ</h1>
//             </div>

//             <div id="menu">
//               <ul>
//                 <li>
//                   <Link to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li>
//                   <Link to="/portfolio">Portfolio</Link>
//                 </li>
//                 <li>
//                   <Link to="/stock-prediction">Prediction</Link>
//                 </li>
//                 <li>
//                   <a href="#tradingViewSection">TradingView</a> {/* Smooth scrolling */}
//                 </li>
//                 <li>Contact</li>
//               </ul>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TradingView Section */}
//       <section
//         id="tradingViewSection"
//         ref={tradingViewRef}
//         className={`tradingView ${tradingViewInView ? "animate" : ""}`}
//       >
//         <h2>
//           Love in every <span>#TradingView</span>
//         </h2>
//         <div id="stats">
//           <div>
//             <h3>90M+</h3>
//             <p>Traders and investors use our platform.</p>
//           </div>
//           <div>
//             <h3>#1</h3>
//             <p>Top website in the world when it comes to all things investing.</p>
//           </div>
//           <div>
//             <h3>1.5M+</h3>
//             <p>
//               Mobile reviews with 4.9 average rating. No other fintech apps are
//               more loved.
//             </p>
//           </div>
//           <div>
//             <h3>10M+</h3>
//             <p>Custom scripts and ideas shared by our users.</p>
//           </div>
//         </div>
//         <div id="tradingImages">
//           <img src="/images/image1.png" alt="TradingView example 1" />
//           <img src="/images/image2.png" alt="TradingView example 2" />
//           <img src="/images/image3.png" alt="TradingView example 3" />
//           <img src="/images/image4.png" alt="TradingView example 4" />
//           <img src="/images/image5.png" alt="TradingView example 5" />
//           <img src="/images/image6.png" alt="TradingView example 6" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
