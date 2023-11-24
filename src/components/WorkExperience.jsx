import { experienceData } from "../data/WorkExperienceData";
import { useState } from "react";

export function WorkExperience() {
  const [experienceDescription, changeDescription] = useState("");

  function companyButtonClick(event) {
    event.preventDefault();
    changeDescription((b) => experienceData[event.target.id - 1].description);
    return;
  }

  return (
    <div className="work-exprience container flex flex-wrap" id="work">
      <div className="button-container w-1/2">
        {experienceData.map((val) => (
          <button
            id={val.id}
            onClick={companyButtonClick}
            className="work-buttons
            bg-gray-400
            text-left
            pl-2
            font-black
            w-1/2
            border-2
            ml-[50px]
            border-black
            transition ease-out delay-400
            hover:translate-x-4
            hover:shadow-[-5px_0px_5px_-1px_rgba(0,0,0,0.3)] 
            hover:shadow-black
            hover:bg-black
            hover:text-white
            lg:ml-[75px]"
          >
            {val.companyName}
          </button>
        ))}
      </div>
      <div className="work-descriptions w-1/2 font-semibold">
        {experienceDescription}
      </div>
    </div>
  );
}
