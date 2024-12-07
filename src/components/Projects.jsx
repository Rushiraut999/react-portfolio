import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const Projects =({project})=>{
    return(

        <div className="amezon">
        <h3>{project.name}</h3>
        <img src={`${project.img}`} alt="amezon"></img>
        <div className="a-tag">
          <a href={`${project.githube}`} className="githube">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={`${project.url}`} className="link">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    )
}
export default Projects;