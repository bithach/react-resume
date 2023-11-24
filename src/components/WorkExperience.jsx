import { experienceData } from "../data/WorkExperienceData";
import { useState } from "react";

export function WorkExperience() {
  const [experienceDescription, changeDescription] = useState([]);
  const [targetID, changeTargetID] = useState(0);

  function companyButtonClick(event) {
    event.preventDefault();
    changeTargetID((a) => event.target.id);
    changeDescription(experienceData[event.target.id - 1].description);
    console.log(experienceDescription);
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
            h-8
            text-left
            pl-2
            ml-[50px]
            lg:ml-[75px]
            w-1/2
            font-black
            border-2
            border-black
            bg-white
            transition ease-out delay-400
            hover:translate-x-4
            hover:shadow-[-5px_0px_5px_-1px_rgba(0,0,0,0.3)] 
            hover:shadow-black
            hover:bg-black
            "
          >
            {val.companyName + " " + val.duration}
          </button>
        ))}
      </div>
      {targetID !== 0 ? (
        <ul className="list-disc w-1/2 space-y-2">
          {experienceDescription.map((desc) => (
            <li className="font-semibold text-xl">{desc}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
