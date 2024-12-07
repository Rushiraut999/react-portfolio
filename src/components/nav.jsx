import React from "react";
import image from "../image/rr.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const nav = () => {
  const box = useRef();
  useGSAP(
    () => {
      gsap.from(".navbar", {
        y: -50,
        scale: 1,
        opacity: 0,
        duration: 1,
      });
      gsap.from(".image", {
        x: -50,
        scale: 1,
        opacity: 0,
        duration: 1,
      });
    },
    { scope: box }
  );

  const home = () => {
    window.scrollTo(0, 0);
  };

  const about = () => {
    window.scrollTo(500, 800);
  };
  const skill = () => {
    window.scrollTo(1000, 1650);
    console.log("skill")
  };
  const project = () => {
    window.scrollTo(0, 2400);
  };
  const contact = () => {
    window.scrollTo(0, 3350);
  };

  return (
    <>
      <div className="nav" ref={box}>
        <img className="image" src={image} alt="rr"></img>
        <div className="navbar">
          <a href="#" onClick={home}>
            Home
          </a>
          <a href="#" onClick={about}>
            About
          </a>
          <a href="#" onClick={skill}>
            Skill
          </a>
          <a href="#" onClick={project}>
            Project
          </a>
          <a href="#" onClick={contact}>
            Contact
          </a>
          <a href="rushi raut.pdf" download="rushi raut " className="resume">
            <i className="fa-solid fa-download"></i>
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default nav;
