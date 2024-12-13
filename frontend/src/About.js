import React from "react";
import Navbar from "./Navbar";

const AboutPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Navbar */}
      <Navbar />
      <div className="container mt-4 mb-4"></div>.
      <div className="container mt-4 mb-4"></div>.
      {/* Hero Section */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Your one-stop solution for all your needs.</h1>
      </header>

      {/* About Us Section */}
      <section style={styles.section}>
        <h2 style={{ fontWeight: "bold"}}>About Us</h2>
        <p style={{ color: "black", padding: "20px" }}>
          We are a passionate team dedicated to providing the best services to
          our customers. With years of experience in the industry, we aim to
          create innovative solutions tailored to your needs.
        </p>
        <p style={{ color: "black", padding: "20px" }}>
          Our mission is to deliver excellence in every aspect of our work,
          ensuring customer satisfaction is our top priority.
        </p>
      </section>

      {/* Contact Us Section */}
      <section style={styles.section}>
        <h2 style={{ fontWeight: "bold" }}>Contact Us</h2>
        <p style={{ color: "black", padding: "20px" }}>
          Have questions or need assistance? Feel free to reach out to us
          through any of the following methods:
        </p>
        <ul style={styles.list}>
          <li>
            Email:{" "}
            <a href="22wh1a0596@bvrithyderabad.edu.in" style={styles.link}>
              contact@ourwebsite.com
            </a>
          </li>
          <li>Phone: +91 8765498702</li>
          <li>Address:Bachupally, 8-5/4, Nizampet Rd, Opposite Rajiv Gandhi Nagar Colony, Hyderabad, Telangana 500090</li>
        </ul>
      </section>

      {/* Our Team Section */}
      <section style={styles.section}>
        <h2 style={{ fontWeight: "bold"}}>Our Team</h2>
        <p style={{ color: "black", padding: "20px" }}>
          Meet the amazing people behind our success:
        </p>
        <ul style={styles.list}>
          <li>Charitha - Team Lead</li>
          <li>Pranavi - Team member</li>
          <li>Bindu - Team member</li>
          <li>Shivani - Team member</li>
          <li>Harshitha - Team member</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>© 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: "2.5em",
    margin: 0,
  },
  section: {
    padding: "20px",
    margin: "20px 0",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
    color: "black",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
  },
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default AboutPage;
