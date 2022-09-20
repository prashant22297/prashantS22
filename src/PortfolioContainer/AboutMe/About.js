import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about-me-section my-3" id="aboutme">
      <div className="d-flex flex-column">
        <span className="about-me-text">About Me</span>
        <span className="about-me-subtext">Why Choose Me?</span>
        <div className="d-flex row justify-content-center shadow-lg my-3">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center lottie-1">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_sjtjaukf.json"
              background="transparent"
              speed="1"
              // style={{ width: "450px", height: "450px" }}
              loop
              //   controls
              autoplay
            ></lottie-player>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column py-5">
            <span className="about-me-subtext1">
              Hi, I am Prashant, working as a Informatica developer at wipro ltd
              holding a experience of 1 yrs. Front end developer with background
              knowledge in HTML, CSS, JavaScript and Reactjs. I am also good at
              Object Oriented Programming languages such as JAVA (SE - 8 Oracle
              Certified),Pyhton.
            </span>
            <span className="few-highlights">
              <span className="few-text">Here are few career highlights</span>
              <span className="few-list">
                <ul>
                  <li>Full Stack web developer </li>
                  <li>Interactive front end developer as per the design </li>
                  <li>Java Development - Intellij Idea </li>
                  <li>Linux - Bash Scripting </li>
                  {/* <li>Docker, Kubernetes, AWS </li> */}
                </ul>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
