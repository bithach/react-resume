import "../styling/components/ProjectCard.css";

export function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-card-container">
        <h3 className="project-card-name">{props.projectName}</h3>
        <img
          className="project-logo"
          src={props.projectLogo}
          alt={props.projectName + " Logo"}
        />
        <p className="project-desc">{props.projectDescription}</p>
        {props.githubLink !== "" ? (
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            Github
          </a>
        ) : (
          "Private"
        )}
      </div>
    </div>
  );
}
