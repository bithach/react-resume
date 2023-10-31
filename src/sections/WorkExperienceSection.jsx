import { useState } from "react";
import "../styling/WorkExperienceSection.css";
import { experienceData } from "../data/WorkExperienceData";

function WorkExperienceSection(props) {
  const [targetID, setTargetID] = useState(0);
  const [experienceDescription, changeDescription] = useState("");
  const [experienceLogo, changeLogo] = useState("");

  function companyButtonClick(event) {
    event.preventDefault();
    setTargetID((a) => event.target.id);
    changeDescription((b) => experienceData[event.target.id - 1].description);
    return;
  }

  return (
    <div className="workExeperience-body" id="work-section">
      <h1 className="workExeperience-title-desktop">
        <b>/* Work Experience */</b>
      </h1>
    </div>
  );
}

export default WorkExperienceSection;
