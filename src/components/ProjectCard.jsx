import { Link } from "react-router-dom";

export function ProjectCard(props) {
  return (
    <div className="project-card" style={{ padding: "5px 5px" }}>
      <div
        style={{
          textAlign: "center",
          width: "16rem",
          maxWidth: "16rem",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      >
        <h3
          style={{
            fontWeight: "bold",
            padding: "5px 0px",
            borderBottom: "1px solid black",
          }}
        >
          {props.projectName}
        </h3>
        <img
          style={{ maxWidth: "100%", padding: "5px 0px" }}
          src={props.projectLogo}
          alt={props.projectName + " Logo"}
        />
        <p style={{ padding: "0px 10px" }}>{props.projectDescription}</p>
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
