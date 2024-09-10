import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import resumePDF from "../Assets/files/resume.pdf"; // Import your resume PDF file
import githubIcon from "../Assets/images/github.png"; // Import GitHub icon
import scholarIcon from "../Assets/images/googlescholar.svg"; // Import Google Scholar icon
import linkedinIcon from "../Assets/images/linkedin.png"; // Import LinkedIn icon
import profileImage from "../Assets/images/profile_image.png"; // Import the image

const Home = () => {
  const [imageWidth, setImageWidth] = useState(null); // State to store image width
  const imageRef = useRef(null); // Reference to the image element

  // Function to set the width of the image dynamically
  useEffect(() => {
    const updateImageWidth = () => {
      if (imageRef.current) {
        setImageWidth(imageRef.current.offsetWidth);
      }
    };

    // Set initial width
    updateImageWidth();

    // Listen to window resize to update width dynamically
    window.addEventListener("resize", updateImageWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateImageWidth);
    };
  }, []);

  return (
    <section className="home-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <h1>Kaustubh Harapanahalli</h1>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <div className="text-box">
              <p className="mb-4">
                As a Computer Science Master's Thesis Student at Arizona State
                University, I am passionate about my research in computer
                vision, machine learning, and artificial intelligence.
              </p>
              <p className="mb-4">
                I address challenges at the intersection of transportation,
                computer vision, autonomous vehicles, and intelligent traffic
                management systems, working under the guidance of Dr. Aviral
                Shrivastava. I am dedicated to researching novel ways to resolve
                problems and making the research available as a solution to
                consumers. Hence, I enjoy focusing on full-stack deep learning.
                Currently, I am applying my work to transportation incident
                management.
              </p>

              <p>
                I worked at Siemens Technology as a Computer Vision Research
                Intern during my Master's and, before that, full-time as a
                Research Engineer at Siemens Technology and Services in India. I
                completed my undergraduate degree from Visvesvaraya
                Technological University, India.
              </p>
            </div>
          </Col>

          {/* Empty Column for Spacing */}
          <Col md={1} />

          {/* Column for Profile Image */}
          <Col md={4} className="text-end">
            <img
              ref={imageRef} // Attach the ref to the image element
              src={profileImage}
              alt="Kaustubh Harapanahalli"
              className="img-fluid"
            />
            <div
              className="email-box mt-3"
              style={{
                width: imageWidth ? `${imageWidth}px` : "100%", // Dynamically set width
              }}
            >
              <p>Ira A. Fulton School of Engineering</p>
              <p>MS Student</p>
              <p className="mb-4">Arizona State University</p>
              <p>Email: kharapan [at] asu [dot] edu</p>
              <div className="social-icons mt-2">
                <a
                  href="https://github.com/kaustubhharapanahalli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" className="icon" />
                </a>
                <a
                  href="https://linkedin.com/in/kmhalli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=51Dqq8kAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={scholarIcon}
                    alt="Google Scholar"
                    className="icon"
                  />
                </a>
              </div>
            </div>

            {/* Download Resume Button */}
            <a
              href={resumePDF} // Link to the resume PDF
              download="Kaustubh_Harapanahalli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="mt-3"
                style={{
                  width: imageWidth ? `${imageWidth}px` : "100%", // Dynamically set button width
                  backgroundColor: "#D9D9D9", // Button color
                  border: "none", // Remove button border
                  padding: "10px 20px", // Add padding for a larger button feel
                  color: "#000", // Set text color to black for visibility
                }}
              >
                Download Resume
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
