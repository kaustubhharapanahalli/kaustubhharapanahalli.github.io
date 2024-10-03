import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../css/Homepage.css";
import ArxivButton from "./ArxivButton";
import GithubButton from "./GithubButton";

const Home = () => {
  const imageRef = useRef(null);

  const handleMouseUp = (e) => {
    e.target.classList.remove("active"); // Remove the active class manually
  };

  return (
    <section className="home-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <h1>Kaustubh Harapanahalli</h1>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="text-md-end text-center order-md-last">
            <img
              ref={imageRef}
              src={`${process.env.PUBLIC_URL}/Assets/images/profile_image.png`}
              alt="Kaustubh Harapanahalli"
              className="img-fluid"
            />
            <div className="email-box mt-3">
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
              <Button className="mt-3 download-btn" onMouseUp={handleMouseUp}>
                Download Resume
              </Button>
            </a>
          </Col>

          {/* Text Content Column */}
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
            <div>
              <h3 className="text-start updates-box">
                <strong>Updates</strong>
                <Row>
                  <Col md={2}>
                    <p> July 2024 </p>
                  </Col>
                  <Col md={10}>
                    <p>
                      Our paper from MPS Lab at ASU called{" "}
                      <a
                        href="https://www.arxiv.org/abs/2408.00996"
                        target="_blank"
                        className="paper-link"
                      >
                        IncidentNet
                      </a>{" "}
                      is accepted to IEEE International Conference of
                      Intelligent Transportation Systems (ITSC) 2024
                    </p>
                  </Col>
                </Row>
              </h3>
            </div>
            <div>
              <h3 className="text-start updates-box">
                <strong>Publications</strong>
                <Row>
                  <Col md={4}>
                    <p>
                      {" "}
                      <a
                        href="https://www.arxiv.org/abs/2408.00996"
                        target="_blank"
                      >
                        <img
                          ref={imageRef}
                          src={`${process.env.PUBLIC_URL}/Assets/images/incidentnet.png`}
                          alt="IncidentNet architecture diagram"
                          className="img-fluid"
                        />
                      </a>{" "}
                    </p>
                  </Col>
                  <Col md={8}>
                    <p className="paper-title">
                      <a
                        href="https://www.arxiv.org/abs/2408.00996"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="paper-link"
                      >
                        IncidentNet: Traffic Incident Detection, Localization
                        and Severity Estimation with Sparse Sensing
                      </a>
                    </p>
                    <p className="authors">
                      Sai Shashank Peddiraju<sup>*</sup>, Kaustubh Harapanahalli
                      <sup>*</sup>, Edward Andert and Aviral Shrivastava
                      <small className="footnote">
                        <sup>*</sup> - shared first authors
                      </small>
                    </p>
                    <p className="paper-buttons">
                      <ArxivButton link="https://www.arxiv.org/abs/2408.00996" />
                      <GithubButton link="https://github.com/MPSLab-ASU/IncidentNet" />
                    </p>
                  </Col>
                </Row>
              </h3>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
