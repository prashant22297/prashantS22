import React from "react";
import "./Skills.css";
export default function Skills() {
  const value = [
    {
      text: "C/C++",
      percentage: 65,
    },
    {
      text: "Java (SE 8 Oracle Certified)",
      percentage: 85,
    },
    {
      text: "SQL",
      percentage: 75,
    },
    {
      text: "Teradata",
      percentage: 80,
    },
    {
      text: "Data Structure and Algorithm",
      percentage: 80,
    },
    {
      text: "Informatica Power Centre",
      percentage: 70,
    },
    {
      text: "Linux",
      percentage: 75,
    },
    {
      text: "Git and Github",
      percentage: 75,
    },
    {
      text: "HTML/CSS",
      percentage: 70,
    },
    {
      text: "React",
      percentage: 50,
    },
  ];
  return (
    <div className="row my-4">
      {value.map((value, index) => {
        return (
          <>
            <div className="col-lg-6 col-md-6 col-sm-12 my-1">
              <span className="technology">{value.text}</span>
              <div className="progress">
                <div
                  className="progress-new"
                  style={{ width: `${value.percentage}%` }}
                ></div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
