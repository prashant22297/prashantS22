import React from "react";
import "./Project.css";
export default function Projects() {
  return (
    <div className="d-flex flex-column">
      {/* College Details */}
      <div className="education my-4 mx-2 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column education-detail">
          <span className="university-name">Portfolio Website:</span>
          <span className="university-degree">
            Technology Stack: React, Bootstrap,CSS , JavaScript
          </span>
        </div>
        <div>
          <span className="year-passed">2021-Present</span>
        </div>
      </div>
      {/* Intermediate School */}
      <div className="education my-4 mx-2 justify-content-between d-flex flex-row">
        <div className=" d-flex flex-column education-detail">
          <span className="university-name">
            <a
              className="university-link"
              target="_blank"
              rel="noreferrer"
              href="https://prashant22297.github.io/Covid19-tracker/"
            >
              Covid 19 Live Tracker:
            </a>
          </span>
          <span className="university-degree">
            Technology Stack: React, Bootstrap, Coivd-19 API.
          </span>
        </div>
        <div>
          <span className="year-passed">2020-2021</span>
        </div>
      </div>
      {/* High School */}
      <div className="education my-4 mx-2 justify-content-between d-flex flex-row">
        <div className=" d-flex flex-column education-detail">
          <span className="university-name">Minesweeper:</span>
          <span className="university-degree">
            Technology Stack : Java, Eclipse
          </span>
        </div>
        <div>
          <span className="year-passed">2019-2020</span>
        </div>
      </div>
    </div>
  );
}
