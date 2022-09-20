import React, { useState } from "react";
import Typical from "react-typical";
import profile_pic from "./profile-image.jpg";
import my_resume from "./resume.pdf";
import "./Profile.css";
export default function Profile() {
  const [opennav, setopennav] = useState(false);
  const goToSection = (id) => {
    const section = document.getElementById(id);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="nav-mobile bg-new" id="home">
        <div className=" d-flex justify-content-between ">
          <span className="brand-name d-flex align-items-center justify-content-center py-3">
            {" "}
            Prashant Singh
          </span>
          <div className="bars mx-4" onClick={() => setopennav(!opennav)}></div>
        </div>
      </div>
      <nav
        className={
          opennav
            ? "d-flex flex-rows bg-new px-9 navbar-fixed-new transition-all"
            : "d-flex flex-rows bg-new px-9 navbar-new transition-all"
        }
      >
        <span className="brand-name">Prashant Singh</span>
        <div className="d-flex flex-rows">
          <div
            className="mx-4 nav-items"
            onClick={() => {
              goToSection("home");
            }}
          >
            Home
          </div>
          <div
            className="mx-4 nav-items"
            onClick={() => {
              goToSection("aboutme");
            }}
          >
            About Me
          </div>
          <div
            className="mx-4 nav-items"
            onClick={() => {
              goToSection("resume");
            }}
          >
            Resume
          </div>
          <div
            className="mx-4 nav-items"
            onClick={() => {
              goToSection("contact");
            }}
          >
            Contact Us
          </div>
        </div>
      </nav>
      <div className="profile px-10">
        <div className="profile-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center primary-text">
              <span className="primary-text-before-name">
                {" "}
                Hello, I'm{" "}
                <span className="primary-text-name">Prashant Kumar Singh</span>
              </span>

              <span className="primary-text-roles py-2">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😎",
                    1000,
                    // "Full Stack Developer 💻",
                    // 1000,
                    "Java Developer 🏴󠁩󠁤󠁪󠁷󠁿",
                    1000,
                    "React/React JS 🌐",
                    1000,
                    "Cross Platform 🎮",
                    1000,
                    "Informatica 🗃️",
                    1000,
                  ]}
                  wrapper="P"
                />
              </span>
              <span className="primary-text-subheading">
                {" "}
                Knack of building application with front and back end operations
              </span>
              <div className="d-flex flex-row justify-content-center my-5">
                <div
                  className="btn-hire-me"
                  onClick={() => {
                    goToSection("contact");
                  }}
                >
                  Hire Me
                </div>
                <a href={my_resume} className="btn-resume-me">
                  {" "}
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center ">
              <img
                className="img-fluid profile-image"
                alt="This is my profile "
                src={profile_pic}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
