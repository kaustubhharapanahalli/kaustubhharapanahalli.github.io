import React from "react";
import "../css/Homepage.css"; // Ensure this CSS file contains the updated styles

const SlidesButton = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="ppt-btn"
    >
      <img
        src={`${process.env.PUBLIC_URL}/Assets/images/pdf.png`}
        alt="PowerPoint"
        style={{ width: "18px", height: "18px", marginRight: "5px" }}
      />
      <span>Slides</span>
    </a>
  );
};

export default SlidesButton;
