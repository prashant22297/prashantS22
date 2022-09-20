import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const Results = () => (
    <div id="results" className="search-results submit-success">
      Message Sent
    </div>
  );

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    var templateParams = {
      from_name: name + " " + email,
      to_name: "prashant22297@gmail.com",
      feedback_message: message,
    };

    emailjs
      .send(
        "service_xrckzlq",
        "template_e0auhb8",
        templateParams,
        "XA978oVqbskogc4zJ"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          const onClick = () => setShowResults(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="contact-me-section py-3" id="contact">
      {/* <div className="relative-bg"></div> */}
      <div className="contact-inner-section d-flex flex-column">
        <span className="about-me-text">Contact Me</span>
        <span className="about-me-subtext mb-4">Lets keep in Touch.</span>
        <div>
          <div className="contact-me-card row">
            <div className="col-lg-6 col-md-6 col-sm-12 contact-left px-2 py-2">
              <span className="get-in-touch mx-4 my-5"> Get in Touch</span>
              <i className="fa-regular fa-message"></i>
              <div className="py-5 d-flex justify-content-center">
                <div className="anim-contact">
                  <lottie-player
                    src="https://assets8.lottiefiles.com/packages/lf20_wytnbin0/ContactArrowButton.json"
                    background="transparent"
                    speed="0.7"
                    loop
                    autoplay
                  ></lottie-player>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
              <Form
                ref={form}
                onSubmit={sendEmail}
                className="d-flex flex-column contact-right"
              >
                <div className="input-group my-3 d-flex flex-column">
                  <label>Name:</label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Your Name"
                    className="input-label"
                  ></input>
                </div>
                <div className="input-group my-3 d-flex flex-column">
                  <label>Email Id:</label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Your Email Id"
                    className="input-label"
                  ></input>
                </div>
                <div className="input-group my-3 d-flex flex-column">
                  <label>Your Message:</label>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setmessage(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Your Message"
                    className="input-label"
                  ></textarea>
                </div>
                <div className="input-group my-3 d-flex flex-column">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Send Message"
                    onClick={onClick}
                  />
                  {showResults ? <Results /> : null}
                </div>
                {/* <div className="submit-success my-3" onClick={onClick}>
                  {" "}
                  {showResults ? <Results /> : null}
                  Messages Sent
                </div> */}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
