import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [imageWidth, setImageWidth] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const updateImageWidth = () => {
      if (imageRef.current) {
        setImageWidth(imageRef.current.offsetWidth);
      }
    };
    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);
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
              {/* More content */}
            </div>
          </Col>
          <Col md={1} />
          <Col md={4} className="text-end">
            <img
              ref={imageRef}
              src={`${process.env.PUBLIC_URL}/Assets/images/profile_image.png`}
              alt="Kaustubh Harapanahalli"
              className="img-fluid"
            />
            <div
              className="email-box mt-3"
              style={{
                width: imageWidth ? `${imageWidth}px` : "100%",
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
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/images/github.png`}
                    alt="GitHub"
                    className="icon"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/kmhalli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/images/linkedin.png`}
                    alt="LinkedIn"
                    className="icon"
                  />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=51Dqq8kAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/images/googlescholar.svg`}
                    alt="Google Scholar"
                    className="icon"
                  />
                </a>
              </div>
            </div>
            <a
              href={`${process.env.PUBLIC_URL}/Assets/files/resume.pdf`}
              download="Kaustubh_Harapanahalli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="mt-3"
                style={{
                  width: imageWidth ? `${imageWidth}px` : "100%",
                  backgroundColor: "#D9D9D9",
                  border: "none",
                  padding: "10px 20px",
                  color: "#000",
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
