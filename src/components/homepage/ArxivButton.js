import React from "react";
import { Button } from "react-bootstrap";
import "../../css/Homepage.css"; // Ensure this file contains the updated styles

const ArxivButton = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button className="arxiv-btn">
        <img
          src={`${process.env.PUBLIC_URL}/Assets/images/arxiv.png`}
          alt="ArXiv"
          style={{
            width: "36px", // Adjusted width for the Arxiv logo
            height: "18px",
            objectFit: "contain",
          }}
        />
      </Button>
    </a>
  );
};

export default ArxivButton;
