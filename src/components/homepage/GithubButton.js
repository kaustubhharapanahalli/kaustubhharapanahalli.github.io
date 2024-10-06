import React from "react";
import { Button } from "react-bootstrap";
import "../../css/Homepage.css"; // Ensure this file contains the updated styles

const GithubButton = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button className="github-btn">
        <img
          src={`${process.env.PUBLIC_URL}/Assets/images/github.png`}
          alt="GitHub"
          style={{ width: "18px", height: "18px" }} // Adjusted size for the GitHub logo
        />
        <span>Code</span>
      </Button>
    </a>
  );
};

export default GithubButton;
