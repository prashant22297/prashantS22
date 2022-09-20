import React from "react";
import { useState } from "react";
import Education from "./Education";
import Projects from "./Projects";
import "./Resume.css";
import Skills from "./Skills";
import Work from "./Work";
export default function Resume() {
  const [education, seteducation] = useState(true);
  const [work, setwork] = useState(false);
  const [skills, setskills] = useState(false);
  const [projects, setprojects] = useState(false);
  function SetAllFalse() {
    seteducation(false);
    setwork(false);
    setprojects(false);
    setskills(false);
  }
  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="resume-outer-section d-flex flex-column" id="resume">
      <span className="about-me-text">Resume</span>
      <span className="about-me-subtext">My Formal Bio Details:</span>
      <div className="resume-section row">
        <div className="col-lg-3 col-md-3 col-sm-12 d-flex flex-row resume-left-section px-0 shadow-lg">
          <div className="d-flex flex-column bg-new text-white">
            <span className="icons-span">
              {" "}
              <i className="fa-solid fa-graduation-cap"></i>
            </span>
            <span className="icons-span">
              {" "}
              <i className="fa-solid fa-briefcase"></i>
            </span>
            <span className="icons-span">
              {" "}
              <i className="fa-solid fa-code"></i>
            </span>
            <span className="icons-span">
              {" "}
              <i className="fa-solid fa-list-check"></i>
            </span>
          </div>
          <div className="d-flex flex-column">
            <span
              className={
                education === true
                  ? "selected resume-option-items"
                  : "resume-option-items"
              }
              onClick={() => ChangeState(seteducation, true)}
            >
              Education
            </span>
            <span
              className={
                work === true
                  ? "selected resume-option-items"
                  : "resume-option-items"
              }
              onClick={() => ChangeState(setwork, true)}
            >
              Work
            </span>
            <span
              className={
                skills === true
                  ? "selected resume-option-items"
                  : "resume-option-items"
              }
              onClick={() => ChangeState(setskills, true)}
            >
              Skills
            </span>
            <span
              className={
                projects === true
                  ? "selected resume-option-items"
                  : "resume-option-items"
              }
              onClick={() => ChangeState(setprojects, true)}
            >
              Projects
            </span>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 resume-right-section">
          {education === true && <Education />}
          {work === true && <Work />}
          {skills === true && <Skills />}
          {projects === true && <Projects />}
        </div>
      </div>
    </div>
  );
}
