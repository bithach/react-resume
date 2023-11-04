import { Link } from "react-router-dom";

export function ProjectCard(props) {
  return (
    <div
      className="project-card-container"
      style={{
        textAlign: "center",
        width: "100%",
        maxWidth: "16rem",
        border: "1px solid black",
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>{props.projectName}</h3>
      <p style={{ padding: "0px 10px" }}>{props.projectDescription}</p>
      {props.githubLink !== "" ? (
        <a href={props.githubLink} target="_blank" rel="noreferrer">
          Github
        </a>
      ) : (
        "Private"
      )}
    </div>
  );
}
