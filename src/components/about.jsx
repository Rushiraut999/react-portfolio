import React from "react";
import image from "../image/OIP.jpg";
const about = () => {
  return (
    <div>
      <div className="about" id="aboutt">
        <h2>About</h2>
        <img src={image} className="coding-image" alt="coding"></img>
        <p className="about-text">
          I Want to Learn Web development. I am seeking a position where I can
          contribute to the organization and improve my skills. Hey There! I'm a
          passionate Full-stack web developer, specializing in the powerful MERN
          stack. My goal is to create user-centric products that solve
          real-world problems. With hands-on experience in HTML, CSS,
          Javascript, ReactJS, Typescript, Redux, Bootstrap, ChakraUI, Node.js,
          MongoDB, ExpressJS, and more, I've completed several projects that
          have honed my skills. I approach my work with discipline, focus, and a
          collaborative mindset. I'm excited to explore cutting-edge
          technologies and leverage my skills to tackle significant challenges.
          When I'm not coding, you'll find me on the sports field, immersed in
          books, or enjoying the rhythms of music and podcasts. Let's connect
          and make a positive impact together!
        </p>
      </div>
    </div>
  );
};

export default about;
