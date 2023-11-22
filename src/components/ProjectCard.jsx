import githubIcon from "../styling/images/github-mark.svg";

export function ProjectCard(props) {
  return (
    <div className="project-card p-[5px]">
      <div
        className="project-card-container text-center w-64 h-[450px] m-h-[450px] max-w-64 border-2 border-black rounded-2xl bg-white 
                      transition ease-out delay-400 
                      hover:translate-y-[-10px] 
                      hover:shadow-md 
                      hover:shadow-black
                      relative"
      >
        <h3 className="project-card-name text-center font-bold py-[5px] border-b-2 border-slate-400">
          {props.projectName}
        </h3>
        <div className="flex justify-center items-center">
          {console.log(props.projectLogo)}
          {props.projectLogo !== "" ? (
            <img
              className="project-logo w-[192px] h-[192px] p-[5px]"
              src={props.projectLogo}
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        <p className="project-desc px-3">{props.projectDescription}</p>
        {props.githubLink !== "" ? (
          <a
            className="flex justify-center items-center"
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              className="github-icon w-[25px] pb-[10px] max-w-[25px]"
              alt="Github Logo"
            ></img>
          </a>
        ) : (
          ""
        )}

        <div className="project-tags border-slate-400 border-t-2 text-gray-700 w-full absolute bottom-0">
          {props.projectTags}
        </div>
      </div>
    </div>
  );
}
