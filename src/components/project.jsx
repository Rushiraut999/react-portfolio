import React, { useState } from "react";
import amezon from "../image/amezon.png";
import calculator from "../image/calculator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects.jsx";
const project = () => {
  const [project, setproject] = useState([
    {
      name: "Amezon",
      img: "/react-portfolio/src/image/amezon.png",
      githube: "https://github.com/Rushiraut999/amezon",
      url: "https://rushiraut999.github.io/amezon/",
    },
    {
      name: "Calculator",
      img: "/react-portfolio/src/image/calculator.png",
      githube: "https://github.com/Rushiraut999/calculator-",
      url: "https://rushiraut999.github.io/calculator-/",
    },
    {
      name: "TodoList",
      img: "/react-portfolio/src/image/TodoList.png",
      githube: "https://github.com/Rushiraut999/TodoList-in-react",
      url: "https://todolistbrushi.netlify.app/",
    },
    {
      name: "wallpepaer",
      img: "/react-portfolio/src/image/wallpepar.png",
      githube: "https://github.com/Rushiraut999/wallpepar-in-react",
      url: "https://wallpeparbyrushi.netlify.app/",
    },
  ]);
  return (
    <div>
      <h2 className="project-heding">Project</h2>
      <div className="project">
        {project.map((item) => (
          <Projects project={item} key={item.name}></Projects>
        ))}
      </div>
    </div>
  );
};

export default project;
