import React from "react";
import "../css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  return (
    <div className="footer">
      <p>&copy; {currentYear} Kaustubh Harapanahalli</p>
    </div>
  );
};

export default Footer;
