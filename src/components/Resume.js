import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/Resume.css";

const Resume = () => {
  return (
    <Container>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <h2 className="font-weight-bold">Research Interests</h2>
          <p>
            I am passionate about attempting to solve complex and real-world
            problems end-to-end, right now, in the domain of Intelligent Traffic
            Systems from the traffic infrastructure perspective. My main
            research focus is to create better unsupervised computer vision and
            multi-modal methods for traffic scenarios, for better traffic
            management solutions. Broadly, I aim to expand my technical
            expertise by exploring interdisciplinary research and applying
            innovative techniques to novel problem statements.
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <h2 className="font-weight-bold">Education</h2>
          <Row className="mb-3">
            <Col md={2} className="font-weight-bold">
              2022 - Present
              <br />
              GPA: 3.75
            </Col>
            <Col>
              <p>
                <strong>Masters of Science in Computer Science</strong>
                <br />
                Arizona State University, Tempe
              </p>
              <p>
                <strong>Relevant Courses:</strong>
              </p>
              <p>
                Data Structures and Algorithms (3.33), Principles of Programming
                Language (3.67), Introduction to Image Processing and Analysis
                (4.00), Statistical Machine Learning (3.67), Image Analytics and
                Informatics (4.33), Machine Learning Accelerator Design (4.00),
                Cloud Computing (3.33), Artificial Intelligence (3.00),
                Knowledge Representation and Reasoning (3.67)
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={2} className="font-weight-bold">
              2014 - 2018
              <br />
              GPA: First Class
            </Col>
            <Col>
              <p>
                <strong>
                  Bachelors of Engineering, Electronics and Communication
                </strong>
                <br />
                Visvesvaraya Technological University, India
              </p>
              <p>
                <strong>Relevant Courses:</strong>
              </p>
              <p>
                Engineering Mathematics, Programming in C and Data Structures,
                Logic Design, Analog Electronic Circuits, Network Analysis,
                Microcontrollers, Control Systems, Signals and Systems, Digital
                Signal Processing, Information Theory and Coding,
                Microprocessors, Programming in C++, DSP Algorithms and
                Architecture, Image Processing
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <h2 className="font-weight-bold">Research</h2>
          <h5>
            <strong>
              IncidentNet: Traffic Incident Detection, Localization, and
              Severity Estimation with Sparse Sensing
            </strong>
          </h5>
          <p>
            We introduced a novel way of detecting, localizing and estimating
            severity of traffic incidents that are not captured in the field of
            view of cameras deployed at intersections. Hence we focus on
            evaluating traffic incidents at locations between intersections.
          </p>
          <p>
            Sai Shashank Peddiraju<sup>*</sup>, Kaustubh Harapanahalli
            <sup>*</sup>, Edward Andert, Aviral Shrivastava
          </p>
          <p>
            [<a href="#">arXiv</a>] [<a href="#">Slides</a>] [
            <a href="#">Poster</a>] [<a href="#">code</a>]
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="mt-4">
        <Col md={2}></Col>
        <Col>
          <h2 className="font-weight-bold">Work Experience</h2>
          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Graduate Services Assistant, Arizona State University
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>Aug 2024 - Present</p>
                </Col>
              </Row>
              <p>
                I am working as a Program Chair Aide to the Computer Science
                Program Chair at Arizona State University, by developing new
                tools.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Research Student, Arizona State University
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>Aug 2023 - Present</p>
                </Col>
              </Row>
              <p>
                I am pursuing my Master's thesis at MPS Lab under Prof. Aviral
                Shrivastava in Computer Vision, with an application focus on
                Intelligent Traffic Management systems.
              </p>
              <p>
                We recently published a paper proving our hypothesis on
                detecting incidents between intersections without knowing if an
                incident occurred or not, which was accepted by the 27th IEEE
                International Conference on Intelligent Transportation Systems
                (IEEE ITSC 2024). The paper is accessible on arXiv -{" "}
                <a href="https://arxiv.org/abs/2408.00996">
                  https://arxiv.org/abs/2408.00996
                </a>
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Artificial Intelligence and Computer Vision Intern, Siemens
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>June 2023 - Jan 2024</p>
                </Col>
              </Row>
              <ul>
                <li>
                  Developed an innovative 'Patch Augmentation' strategy
                  enhancing anomaly detection capabilities in computer vision
                  models where the defect size is minuscule compared to image
                  size, utilizing randomized and bounding-box aware patch
                  extraction.
                </li>
                <li>
                  Implemented and analyzed the impact of patch augmentation on
                  model generalization, significantly improving detection
                  accuracies with a 99.674% training accuracy in image
                  classification using ResNet18 and a 99.23% mAP in object
                  detection with YOLOv5.
                </li>
                <li>
                  Integrated a PostgreSQL database schema using SQLAlchemy and
                  FastAPI endpoints for dynamic model serving with a website for
                  real-time anomaly detection in manufacturing processes.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Research Engineer, Siemens India
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>Aug 2019 - June 2022</p>
                </Col>
              </Row>
              Research and development of custom solutions for Industrial
              Computer Vision Applications. Key focus areas include:
              <br />
              <strong>Applied R&D:</strong>
              <ul>
                <li>
                  Designed Active Learning strategies for 2D object detection
                  (40% reduction in # of images required for model training,
                  annotation cost savings of 20%, 15% reduction in manual effort
                  for annotation verification - used in-house developed
                  cookie-cutter templates, can easily integrate with deep
                  learning frameworks) and 2D semantic segmentation (on-going
                  research, initial reduction in annotation effort ~5%) using
                  Python to optimize the image selection process.
                </li>
                <li>
                  Formulated a framework for rapid prototyping and developing
                  computer vision solutions for industrial AI solutions. The
                  framework has several moving parts as below and has reduced
                  more than 40% of manual effort on prototypical developments.
                </li>
                <li>
                  2D Object Tracking in real-time - Implemented an in-house 2D
                  object tracking algorithm using C++ for running real-time 2D
                  object tracking (results like vehicle counting, speed
                  estimation, and density estimation). The 2D object tracker had
                  an MOT score of 68% and executed with an FPS of 15 on Nvidia
                  Jetson-TX2 for 4 streams.
                </li>
              </ul>
              <strong>Solution Development for Siemens Mobility:</strong>
              <ul>
                <li>
                  Developed an automation tool for processing and generating
                  global coordinates for railway use cases using Airflow.
                </li>
                <li>
                  Designed and shaped a tool for tracking multiple model
                  iterations executed for a particular project providing the
                  benefit of having all the model versions, and dataset versions
                  along with the utilized data labels to be tracked.
                </li>
              </ul>
              <strong>Non-project experience:</strong>
              <ul>
                <li>
                  Presented the Computer Vision framework developed at the
                  Siemens Inner Source Summit 2021 highlighting the importance
                  of inner-sourcing technology.
                </li>
                <li>
                  Involved in strategy development for the acquisition of new
                  projects with Digital Industry, Mobility, and Smart
                  Infrastructure business groups.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Program Manager, Speckbit Exploratories
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>July 2018 - May 2019</p>
                </Col>
              </Row>
              <strong>
                Program Management, Bridge Student Accelerator Program:
              </strong>
              <ul>
                <li>
                  Architected the Machine Learning Foundation track launch, an
                  exclusive program focused on introducing Data Science &
                  Machine Learning at the Bridge Student Accelerator Program
                </li>
                <li>
                  Successfully conducted the Machine Learning Foundation track
                  with 95% completion rates over multiple batches
                </li>
              </ul>
              <strong>Machine Learning Instruction:</strong>
              <ul>
                <li>
                  Managed & coached 300+ undergraduate students to enter the
                  domain of Machine Learning & Data Science
                </li>
                <li>
                  Designed & authored comprehensive content for the Hacking Data
                  Science track
                </li>
                <li>
                  Trained consecutive batches of the Machine Learning
                  Foundation.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Teaching Assistant, Speckbit Exploratories
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>Sept 2017 - May 2018</p>
                </Col>
              </Row>
              I also worked as a teaching assistant, going to the different
              workshops conducted by Speckbit on topics like:
              <ul>
                <li>Introduction to Python,</li>
                <li>
                  Introduction to Machine Learning Tools (NumPy, Pandas and
                  Matplotlib),
                </li>
                <li>
                  Introduction to Machine Learning (Intro to AI, ML, Working on
                  Linear Regression, Logistic Regression and Neural Networks),
                  and
                </li>
                <li>Introduction to Django and Deployment using Heroku.</li>
              </ul>
              These workshops were conducted in colleges like BIT, SJBIT, JSS,
              DSATM, KLE's MS. Shesgiri College of Engineering (Belgaum).
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Developer Intern, Speckbit Exploratories
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>Jan 2018 - Apr 2018</p>
                </Col>
              </Row>
              I worked on building tools, marketing on social media and helped
              in launching a product at Speckbit called, Bridge Student
              Accelerator Program. I also worked on curating content for the
              Bridge Student Accelerator Program and constructed problems which
              were given as assignments to the students who were part of the
              program.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Operations Intern, Speckbit Exploratories
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>Sept 2017 - Oct 2017</p>
                </Col>
              </Row>
              I worked as an Operations Intern, helping out in reaching out to
              multiple colleges. I designed basic graphics for Social Media
              using Adobe Illustrator. I curated content on the previous product
              at Speckbit which was called Collections.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">Web Designer, Freelancer</h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>Jan 2018 - Mar 2018</p>
                </Col>
              </Row>
              Developed a landing page and interactive web interface for the
              Department of Electronics and Communication, SJBIT, India, to
              improve the marketing reach and ease of hosting a technical and
              sports event.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md={9}>
                  <h5 className="font-weight-bold">
                    Social Media Manager, Freelancer
                  </h5>
                </Col>
                <Col md={3} className="text-right">
                  <p>Jan 2017 - Apr 2017</p>
                </Col>
              </Row>
              I worked as a social media coordinator for the IEEE Conference
              which was conducted on March 16th, 2016. The main motive of being
              a social media coordinator was to increase the awareness of the
              conference which was being conducted. With the help of social
              media, we increased the reach of the conduction of the conference.
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row className="mt-4">
        <Col md={2}></Col>

        <Col>
          <h2 className="font-weight-bold">Projects</h2>
          <Row className="mb-4">
            <Col md={8}>
              <h4 className="font-weight-bold">
                Implementation of Data Structure and Algorithms Course Projects:
                Academic Project
              </h4>
            </Col>
            <Col md={4} className="text-right">
              <p className="font-italic">Fall 2022</p>
            </Col>
            <p>
              The project consists of implementation of Insertion Sort, Quick
              Sort, Merge Sort, MinHeap, Dijkstra's, and MaxHeap algorithms.
            </p>
            <p>
              <strong>Skills:</strong> C++, Data Structures, Algorithms
            </p>
            <p>
              [<a href="#">code</a>]
            </p>
          </Row>

          <Row className="mb-4">
            <Col md={8}>
              <h4 className="font-weight-bold">
                Implementation of a Programming Language: Academic Project
              </h4>
            </Col>
            <Col md={4} className="text-right">
              <p className="font-italic">Fall 2022</p>
            </Col>
            <p>
              The project consists of the implementation of multiple projects
              developed for the principles of programming language course.
            </p>
            <p>
              <strong>Skills:</strong> C++, Data Structures, Algorithms
            </p>
            <p>
              [<a href="#">code</a>]
            </p>
          </Row>

          <Row className="mb-4">
            <Col md={8}>
              <h4 className="font-weight-bold">
                Dawn Bench Competition by Stanford: Personal Project
              </h4>
            </Col>
            <Col md={4} className="text-right">
              <p className="font-italic">Winter 2019</p>
            </Col>
            <p>
              Trained a model using Custom Network based on Resnet architecture
              to reduce the time-to-cost ratio for training a model on the CIFAR
              10 dataset using a V100 GPU with a validation accuracy of 92% in
              140 seconds.
            </p>
            <p>
              <strong>Skills:</strong> Python, PyTorch, NumPy
            </p>
            <p>
              [<a href="#">code</a>]
            </p>
          </Row>

          <Row className="mb-4">
            <Col md={8}>
              <h4 className="font-weight-bold">
                Human Activity Recognition using Pose Estimations: Academic
                Project
              </h4>
            </Col>
            <Col md={4} className="text-right">
              <p className="font-italic">Fall 2017 - Spring 2018</p>
            </Col>
            <p>
              Project was implemented using Python and OpenCV for the
              application of Machine Learning and Pose Estimations. Machine
              Learning was carried out with the help of the Chainer package and
              Keras for the classification of Activities.
            </p>
            <p>
              <strong>Skills:</strong> Python, Keras, TensorFlow, NumPy, Chainer
            </p>
            <p>
              <strong>Collaborators:</strong> Kaustubh Harapanahalli<sup>*</sup>
              , Govardhan GH<sup>*</sup>
            </p>
            <p>
              [<a href="#">code</a>]
            </p>
          </Row>

          <Row className="mb-4">
            <Col md={8}>
              <h4 className="font-weight-bold">
                High Spectral Image Compression
              </h4>
            </Col>
            <Col md={4} className="text-right">
              <p className="font-italic">Fall 2016 - Spring 2017</p>
            </Col>
            <p>
              Hyperspectral data are a challenge for data compression. Several
              factors make the constraints particularly stringent and the
              challenge exciting. This project explored different compression
              methods for hyperspectral image data.
            </p>
            <p>
              <strong>Skills:</strong> Python, Image Processing, Linear Algebra
            </p>
            <p>
              <strong>Collaborators:</strong> Kaustubh Harapanahalli<sup>*</sup>
              , Govardhan GH<sup>*</sup>
            </p>
            <p>
              [<a href="#">code</a>]
            </p>
          </Row>

          <Row className="mb-4">
            <Col md={8}>
              <h4 className="font-weight-bold">
                Automatic Street Light Control and Maintenance using Arduino
              </h4>
            </Col>
            <Col md={4} className="text-right">
              <p className="font-italic">Spring 2016</p>
            </Col>
            <p>
              Complete removal of human intervention with Street lights and
              automating the basic functions and maintenance of street lights.
            </p>
            <p>
              <strong>Skills:</strong> Arduino, C#, Digital Logic, Circuit
              Design
            </p>
            <p>
              <strong>Collaborators:</strong> Kaustubh Harapanahalli<sup>*</sup>
              , Radhakrishna Shastri, Anthony Nelson
            </p>
            <p>
              [<a href="#">code</a>]
            </p>
          </Row>

          <Row className="mb-4">
            <Col md={8}>
              <h4 className="font-weight-bold">
                Traffic Clearance to ease movement of Ambulance
              </h4>
            </Col>
            <Col md={4} className="text-right">
              <p className="font-italic">Spring 2016</p>
            </Col>
            <p>
              Prototype using simple circuit design for automated traffic signal
              control using the location of ambulance.
            </p>
            <p>
              <strong>Skills:</strong> Arduino, C#, Digital Logic, Circuit
              Design
            </p>
            <p>
              <strong>Collaborators:</strong> Kaustubh Harapanahalli<sup>*</sup>
              , Govardhan GH<sup>*</sup>, Radhakrishna Shastri<sup>*</sup>,
              Hemanth Kumar P<sup>*</sup>
            </p>
            <p>
              [<a href="#">code</a>]
            </p>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default Resume;
