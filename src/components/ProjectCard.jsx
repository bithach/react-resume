import "../styling/components/ProjectCard.css";
import githubIcon from "../styling/images/github-mark.svg";

export function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-card-container">
        <h3 className="project-card-name">{props.projectName}</h3>
        {console.log(props.projectLogo)}
        <img
          className="project-logo"
          src={props.projectLogo}
          alt={props.projectName + " Logo"}
        />
        <p className="project-desc">{props.projectDescription}</p>
        {props.githubLink !== "" ? (
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            <img
              src={githubIcon}
              className="github-icon"
              alt="Github Logo"
            ></img>
          </a>
        ) : (
          ""
        )}

        <div className="project-tags">{props.projectTags}</div>
      </div>
    </div>
  );
}
