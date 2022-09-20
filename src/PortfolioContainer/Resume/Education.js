import React from "react";
import "./Education.css";
export default function Education() {
  return (
    <div className="d-flex flex-column education-div">
      {/* College Details */}
      <div className="education my-4 mx-2 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column education-detail">
          <span className="university-name">
            Technocrats Institute of Technology (Excellence), Bhopal
          </span>
          <span className="university-degree">
            B.E. in Computer Science and Engineering
          </span>
        </div>
        <div>
          <span className="year-passed">2016-2020</span>
        </div>
      </div>
      {/* Intermediate School */}
      <div className="education my-4 mx-2 justify-content-between d-flex flex-row">
        <div className=" d-flex flex-column education-detail">
          <span className="university-name">
            Malti Janta Janardan Inter College ,Mau( State Board )
          </span>
          <span className="university-degree">HSC (12th Board)</span>
        </div>
        <div>
          <span className="year-passed">2015-2016</span>
        </div>
      </div>
      {/* High School */}
      <div className="education my-4 mx-2 justify-content-between d-flex flex-row">
        <div className=" d-flex flex-column education-detail">
          <span className="university-name">
            Fatima Convent , Mau( I.C.S.E. Board )
          </span>
          <span className="university-degree">SSC (10th Board)</span>
        </div>
        <div>
          <span className="year-passed">2012-2013</span>
        </div>
      </div>
    </div>
  );
}
