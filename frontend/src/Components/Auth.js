// import React, { useState } from "react";
// import "./Auth.css";
// import AuthToggle from "./AuthToggle";
// import investGif from "./invest(1).gif";
// import subImg41 from "./Subimg41.png";
// import subImg42 from "./subimg42.png";
// import subImg43 from "./subimg43.png";
// import InvestIQ from "../images/INVestIQ.png";
// import Page1 from "./Pages1.png"; // Importing Page1
// import Pages3 from "./Page3.png"; // Importing Page3

// const App = () => {
//   const [currentView, setCurrentView] = useState("Auth");

//   if (currentView === "AuthToggle") {
//     return <AuthToggle />;
//   }

//   return (
//     <div>
//       {/* Section 1 with Auth Component */}
//       <section
//         id="section1"
//         className="auth-section"
//         style={{ backgroundColor: "#c9a4f7", padding: "20px", textAlign: "center" }}
//       >
//         <div className="image-overlay">
//           {/* Company Logo and Text */}
//           <div
//             className="logo-container"
//             style={{
//               position: "absolute",
//               top: "20px",
//               left: "20px",
//               zIndex: 10,
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src={InvestIQ}
//               alt="InvestIQ Logo"
//               className="logo"
//               style={{
//                 height: "40px",
//                 width: "auto",
//                 marginRight: "10px",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: "1.0rem",
//                 fontWeight: "bold",
//                 color: "black",
//               }}
//             >
//               InvestIQ
//             </span>
//           </div>

//           {/* Sign In Button */}
//           <button
//             className="auth-btn top-right"
//             onClick={() => setCurrentView("AuthToggle")}
//           >
//             Login/Signup
//           </button>

//           <div className="overlay-content">
//             {/* Main Text Content */}
//             <div className="main-text">
//               <h1 className="main-title">
//                 Look First/<br />
//                 <span className="secondary-title">Then leap</span>
//               </h1>
//               <p className="subtitle">
//                 The best trades require research, then commitment.
//               </p>
//               {/* Get Started Button */}
//               <div className="auth-buttons">
//                 <button
//                   className="auth-btn"
//                   onClick={() => setCurrentView("AuthToggle")}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Add Page1 Image to the right side */}
//         <img
//           src={Page1}
//           alt="Page1"
//           style={{
//             position: "absolute",
//             right: "20px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             maxWidth: "40%",
//             height: "auto",
//           }}
//         />
//       </section>

//       {/* Section 2 with content and GIF */}
//       <section
//         id="section2"
//         style={{ position: "relative", textAlign: "center", padding: "60px 20px" }}
//       >
//         <h1 style={{ marginBottom: "20px", fontSize: "3.5rem", fontWeight: "bold" }}>
//           WHERE THE WORLD DOES MARKETS
//         </h1>
//         <p
//           style={{
//             marginBottom: "40px",
//             fontSize: "1.25rem",
//             lineHeight: "1.6",
//             maxWidth: "80%",
//             margin: "0 auto",
//           }}
//         >
//           Join 90 million traders and investors taking the future into their own hands.
//         </p>
//         <div id="gif-container" style={{ display: "flex", justifyContent: "center" }}>
//           <img
//             src={investGif}
//             alt="Investing GIF"
//             style={{
//               width: "70%",
//               height: "auto",
//               objectFit: "contain",
//             }}
//           />
//         </div>
//       </section>
      
//       <section
//   id="section3"
//   style={{ textAlign: "center", padding: "20px", backgroundColor: "#c9a4f7", position: "relative" }}
// >
//   <div style={{ marginTop: "10px" }}>
//     <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Frequently Asked Questions</h3> {/* Move header above the FAQ box */}
    
//     <div
//       className="faq"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "20px",
//         padding: "20px",
//         backgroundColor: "white",
//         borderRadius: "10px",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//         maxWidth: "1500px",
//         margin: "0 auto",
//         position: "absolute", // Keep it properly positioned
//         top: "10%", // Position FAQ section down a bit
//       }}
//     >
//      <div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
//   <h4>What is the purpose of this platform?</h4>
//   <p>
//     This platform aims to simplify finance and make stock market insights accessible to everyone in their
//     preferred language.
//   </p>
// </div>
// <div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
//   <h4>How do I get started?</h4>
//   <p>
//     You can start by creating an account, exploring our resources, and learning through our guided tutorials.
//   </p>
// </div>
// <div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
//   <h4>Is there a cost associated with using this platform?</h4>
//   <p>Our basic features are free, but we offer premium plans for advanced tools and resources.</p>
// </div>
// <div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
//   <h4>What tools does the platform offer?</h4>
//   <p>We provide a range of tools including stock analysis, portfolio tracking, and market trends visualization.</p>
// </div>
// <div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
//   <h4>Can I access this platform on mobile?</h4>
//   <p>Yes, our platform is fully optimized for mobile devices, providing a seamless experience on both iOS and Android.</p>
// </div>
// <div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
//   <h4>Is my personal information secure?</h4>
//   <p>We prioritize your privacy and implement advanced security measures to protect your data.</p>
// </div>

//     </div>
//   </div>

//   {/* Add Pages3 Image to the right side of FAQs */}
//   <img
//     src={Pages3}
//     alt="Page3"
//     style={{
//       position: "absolute",
//       right: "100px",
//       top: "50%",
//       transform: "translateY(-50%)",
//       maxWidth: "30%",
//       height: "auto",
//     }}
//   />
// </section>



      
//  {/* Section 4 */}
//  <section
//   id="section4"
//   style={{
//     backgroundColor: "white",
//     color: "black",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-start", // Align content to the top-left
//     textAlign: "left", // Align text to the left
//     width: "100%",
//     height: "100vh", // Occupies full screen height
//     position: "relative",
//     overflow: "hidden",
//     flexDirection: "column", // Stack content vertically
//     padding: "40px 20px", // Padding for the section
//   }}
// >
//   <div
//     style={{
//       display: "flex",
//       gap: "30px", // Increased gap between cards
//       justifyContent: "flex-start", // Align cards to the left
//       flexWrap: "wrap",
//       padding: "0 20px", // Padding around the cards
//     }}
//   >
//     {/* Card 1 */}
//     <div
//       style={{
//         width: "500px", // Enlarged width for cards
//         backgroundColor: "#fff",
//         borderRadius: "10px",
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Larger shadow
//         overflow: "hidden",
//         transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animation effects
//       }}
//       onMouseEnter={(e) => {
//         e.target.style.transform = "scale(1.05)"; // Zoom in on hover
//         e.target.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.3)"; // Stronger shadow
//       }}
//       onMouseLeave={(e) => {
//         e.target.style.transform = "scale(1)"; // Return to original size
//         e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)"; // Return to original shadow
//       }}
//     >
//       <img
//         src={subImg41}
//         alt="Sub Image 41"
//         style={{
//           width: "100%",
//           height: "auto",
//         }}
//       />
//       <div style={{ padding: "20px" }}>
//         <strong>Purpose of the Script</strong>
//         <p>
//           This script identifies the strength of support and resistance levels based on key factors like volume, bounce frequency, and retests. Each level is assigned a score (0-100) and visualized with color-coded labels on the chart.
//         </p>
//       </div>
//     </div>

//     {/* Card 2 */}
//     <div
//       style={{
//         width: "500px", // Enlarged width for cards
//         backgroundColor: "#fff",
//         borderRadius: "10px",
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Larger shadow
//         overflow: "hidden",
//         transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animation effects
//       }}
//       onMouseEnter={(e) => {
//         e.target.style.transform = "scale(1.05)"; // Zoom in on hover
//         e.target.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.3)"; // Stronger shadow
//       }}
//       onMouseLeave={(e) => {
//         e.target.style.transform = "scale(1)"; // Return to original size
//         e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)"; // Return to original shadow
//       }}
//     >
//       <img
//         src={subImg42}
//         alt="Sub Image 42"
//         style={{
//           width: "100%",
//           height: "auto",
//         }}
//       />
//       <div style={{ padding: "20px" }}>
//         <strong>Kalman Trend Levels</strong>
//         <p>
//           Kalman Trend Levels is an advanced trend-following indicator designed to highlight key support and resistance zones based on Kalman filter crossovers. With dynamic trend analysis and actionable signals, it helps traders interpret market direction and momentum shifts effectively.
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* News Link Below the Cards */}
//   <div style={{ textAlign: "center", marginTop: "20px" }}>
//     <a
//       href="https://economictimes.indiatimes.com/markets/stocks/live-blog/bse-sensex-today-live-nifty-stock-market-updates-10-december-2024/liveblog/116154182.cms?from=mdr"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         fontSize: "1.1rem",
//         fontWeight: "bold",
//         color: "brown",
//         textDecoration: "underline",
//       }}
//     >
//       Click here to read the latest stock market news
//     </a>
//   </div>
// </section>


// <footer class="footer">
//    <div class="container">
//      <div class="footer-row">
//        <div class="footer-col">
//         <h3>About Us</h3>
//          <p>
//            We are committed to providing the best trading platforms and financial information to help our users succeed.
//          </p>
//        </div>

//        <div class="footer-col">
//          <h3>Quick Links</h3>
//          <ul>
//            <li><a href="#">Home</a></li>
//            <li><a href="#">Features</a></li>
//            <li><a href="#">Pricing</a></li>
//            <li><a href="#">Support</a></li>
//          </ul>
//        </div>

//        <div class="footer-col">
//          <h3>Legal</h3>
//          <ul>
//            <li><a href="#">Terms & Conditions</a></li>
//            <li><a href="#">Privacy Policy</a></li>
//          </ul>
//        </div>

//        <div class="footer-col">
//          <h3>Follow Us</h3>
//          <p> Contact details
//            Pranavi - 9876543210
//          </p>
//          <div class="social-icons">
//          <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
//            <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
//            <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
//            <li><a href="https://www.google.com" target="_blank">Google</a></li>
//          </div>
//        </div>
//      </div>
//    </div>
//  </footer>
//     </div>
//   );
// };

// export default App;















import React, { useState } from "react";
import "./Auth.css";
import AuthToggle from "./AuthToggle";
import investGif from "./invest(1).gif";
import subImg41 from "./Subimg41.png";
import subImg42 from "./subimg42.png";
import subImg43 from "./subimg43.png";
import InvestIQ from "../images/INVestIQ.png";
import Page1 from "./Pages1.png"; // Importing Page1
import Pages3 from "./Page3.png"; // Importing Page3

const App = () => {
  const [currentView, setCurrentView] = useState("Auth");

  if (currentView === "AuthToggle") {
    return <AuthToggle />;
  }

  return (
    <div>
      {/* Section 1 with Auth Component */}
      <section
        id="section1"
        className="auth-section"
        style={{ backgroundColor: "#c9a4f7", padding: "20px", textAlign: "center" }}
      >
        <div className="image-overlay">
          {/* Horizontal Scrolling Bar for Stock Tickers */}
          <div
             className="stock-ticker-container"
             style={{
              position: "fixed",
    top: "-20px", // Adjust the vertical positioning as per your requirement
    left: "0px", // Move left side slightly more by 30px
    right: "0px", // Keep the right side as is
    zIndex: 9,
    display: "flex",
    //overflowX: "scroll",
    height: "50px", // Enables horizontal scrolling
    overflow: "hidden", // Prevents vertical scrolling
    whiteSpace: "nowrap",
    padding: "10px 0",
    background: "linear-gradient(to right, #111, #333)", // Slight gradient background
    color: "#fff",
    fontSize: "1rem",
    width: "800%", // Makes the container span the full width of the screen
    borderRadius: "3px", // Rounded corners for the container
    //scrollbarWidth: "thin", // Ensures the scroll bar is slim
    WebkitOverflowScrolling: "touch", // Adds momentum scrolling on mobile
  }}
>
            {/* Animated Stock Tickers */}
    <div
      style={{
        display: "flex",
        animation: "scroll 20s linear infinite", // Scroll animation applied here
      }}
    >
      <div style={{ display: "inline-block", marginRight: "40px", padding: "10px", backgroundColor: "#1e1e1e", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
        <span>NSE</span> <span style={{ color: "red",padding:"4px" }}>53,216.45</span> <span style={{ color: "red",padding:"2px" }}>-0.33%</span>
      </div>
      <div style={{ display: "inline-block", marginRight: "40px", padding: "10px", backgroundColor: "#1e1e1e", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
        <span>APPLE</span> <span style={{ color: "green",padding:"4px" }}>7,125.80</span> <span style={{ color: "green",padding:"2px"  }}>+0.15%</span>
      </div>
      <div style={{ display: "inline-block", marginRight: "40px", padding: "10px", backgroundColor: "#1e1e1e", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
        <span>KOTAK</span> <span style={{ color: "green",padding:"4px" }}>1,610.55</span> <span style={{ color: "green",padding:"2px"  }}>+1.55%</span>
      </div>
      <div style={{ display: "inline-block", marginRight: "40px", padding: "10px", backgroundColor: "#1e1e1e", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
        <span>ICICI</span> <span style={{ color: "red",padding:"4px" }}>1,859.25</span> <span style={{ color: "red",padding:"2px"  }}>-0.21%</span>
      </div>
      <div style={{ display: "inline-block", marginRight: "40px", padding: "10px", backgroundColor: "#1e1e1e", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
        <span>GOOGLE</span> <span style={{ color: "red",padding:"4px" }}>2,344.95</span> <span style={{ color: "red",padding:"2px"  }}>-2.35%</span>
      </div>
      <div style={{ display: "inline-block", marginRight: "40px", padding: "10px", backgroundColor: "#1e1e1e", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
        <span>AMAZON</span> <span style={{ color: "red",padding:"4px" }}>4,464.35</span> <span style={{ color: "red",padding:"2px"  }}>-0.03%</span>
      </div>
      <div style={{ display: "inline-block", marginRight: "40px", padding: "10px", backgroundColor: "#1e1e1e", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}>
        <span>INTUIT</span> <span style={{ color: "green" ,padding:"4px"}}>466.35</span> <span style={{ color: "green",padding:"2px"  }}>+0.22%</span>
      </div>
              {/* Add more items here as needed */}
            </div>
          </div>
  
              
          {/* Company Logo and Text */}
          <div
            className="logo-container"
            style={{
              position: "absolute",
              top: "25px",
              left: "20px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={InvestIQ}
              alt="InvestIQ Logo"
              className="logo"
              style={{
                height: "40px",
                width: "auto",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                fontSize: "1.0rem",
                fontWeight: "bold",
                color: "black",
              }}
            >
              InvestIQ
            </span>
          </div>
  
          {/* Sign In Button */}
          <button
            className="auth-btn top-right"
            onClick={() => setCurrentView("AuthToggle")}
          >
            Login/Signup
          </button>
  
          <div className="overlay-content">
            {/* Main Text Content */}
            <div className="main-text">
              <h1 className="main-title">
                Look First/<br />
                <span className="secondary-title">Then leap</span>
              </h1>
              <p className="subtitle">
                The best trades require research, then commitment.
              </p>
              {/* Get Started Button */}
              <div className="auth-buttons">
                <button
                  className="auth-btn"
                  onClick={() => setCurrentView("AuthToggle")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Add Page1 Image to the right side */}
        <img
          src={Page1}
          alt="Page1"
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "40%",
            height: "auto",
          }}
        />
      </section>


      {/* Section 2 with content and GIF */}
      <section
        id="section2"
        style={{ position: "relative", textAlign: "center", padding: "60px 20px" }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "3.5rem", fontWeight: "bold" }}>
          WHERE THE WORLD DOES MARKETS
        </h1>
        <p
          style={{
            marginBottom: "40px",
            fontSize: "1.25rem",
            lineHeight: "1.6",
            maxWidth: "80%",
            margin: "0 auto",
          }}
        >
          Join 90 million traders and investors taking the future into their own hands.
        </p>
        <div id="gif-container" style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/stock.png"
            alt="Investing GIF"
            style={{
              width: "70%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      
      <section
  id="section3"
  style={{ textAlign: "center", padding: "20px", backgroundColor: "#c9a4f7", position: "relative" }}
>
  <div style={{ marginTop: "10px" }}>
    <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Frequently Asked Questions</h3> {/* Move header above the FAQ box */}
    
    <div
      className="faq"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "1500px",
        margin: "0 auto",
        position: "absolute", // Keep it properly positioned
        top: "10%", // Position FAQ section down a bit
      }}
    >
     <div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
  <h4>What is the purpose of this platform?</h4>
  <p>
    This platform aims to simplify finance and make stock market insights accessible to everyone in their
    preferred language.
  </p>
</div>
<div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
  <h4>How do I get started?</h4>
  <p>
    You can start by creating an account, exploring our resources, and learning through our guided tutorials.
  </p>
</div>
<div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
  <h4>Is there a cost associated with using this platform?</h4>
  <p>Our basic features are free, but we offer premium plans for advanced tools and resources.</p>
</div>
<div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
  <h4>What tools does the platform offer?</h4>
  <p>We provide a range of tools including stock analysis, portfolio tracking, and market trends visualization.</p>
</div>
<div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
  <h4>Can I access this platform on mobile?</h4>
  <p>Yes, our platform is fully optimized for mobile devices, providing a seamless experience on both iOS and Android.</p>
</div>
<div className="faq-item" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
  <h4>Is my personal information secure?</h4>
  <p>We prioritize your privacy and implement advanced security measures to protect your data.</p>
</div>

    </div>
  </div>

  {/* Add Pages3 Image to the right side of FAQs */}
  <img
    src={Pages3}
    alt="Page3"
    style={{
      position: "absolute",
      right: "100px",
      top: "50%",
      transform: "translateY(-50%)",
      maxWidth: "30%",
      height: "auto",
    }}
  />
</section>



      
   {/* Section 4 */}
   <section id="section4">
        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img src={subImg41} alt="Sub Image 41" />
            <div className="card-content">
              <strong>Purpose of the Script</strong>
              <p>
                This script identifies the strength of support and resistance levels based on key factors like volume, bounce frequency, and retests. Each level is assigned a score (0-100) and visualized with color-coded labels on the chart.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={subImg42} alt="Sub Image 42" />
            <div className="card-content">
              <strong>Kalman Trend Levels</strong>
              <p>
                Kalman Trend Levels is an advanced trend-following indicator designed to highlight key support and resistance zones based on Kalman filter crossovers. With dynamic trend analysis and actionable signals, it helps traders interpret market direction and momentum shifts effectively.
              </p>
            </div>
          </div>

             {/* Card 3 */}
             <div className="card">
            <img src={subImg43} alt="Sub Image 43" />
            <div className="card-content">
              <strong>Market Sentiment Analysis</strong>
              <p>
                This tool leverages advanced AI to analyze market sentiment by evaluating news headlines, social media trends, and trading volume. It provides traders with a sentiment score to gauge market optimism or pessimism effectively.
              </p>
            </div>
          </div>

        </div>

        {/* News Link Below the Cards */}
        <div className="news-link">
          <a
            href="https://economictimes.indiatimes.com/markets/stocks/live-blog/bse-sensex-today-live-nifty-stock-market-updates-10-december-2024/liveblog/116154182.cms?from=mdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to read the latest stock market news
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <h3>About Us</h3>
              <p>We are committed to providing the best trading platforms and financial information to help our users succeed.</p>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Follow Us</h3>
              <p>Contact details: Pranavi - 9876543210</p>
              <ul className="social-icons">
                <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
                <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                <li><a href="https://www.google.com" target="_blank">Google</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

















