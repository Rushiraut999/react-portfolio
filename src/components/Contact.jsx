import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2>Contact</h2>
        <p className="reach-out">Reach out to me, 24/7</p>
        <p className="email">Email Me</p>
        <p className="my-email">rushiraut1717@gmail.com</p>
        <p className="call">Call Me</p>
        <p className="my-no">7350062647</p>
        <p className="follow">follow Me</p>
        <a href="www.linkedin.com/in/rushiraut/" className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/rushi999999" className="github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/_rishi_r_999/" className="instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </>
  );
};

export default Contact;
