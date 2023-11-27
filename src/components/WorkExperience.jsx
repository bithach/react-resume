import { experienceData } from "../data/WorkExperienceData";
import { useState } from "react";

export function WorkExperience() {
  const [experienceDescription, changeDescription] = useState([]);
  const [targetID, changeTargetID] = useState(0);
  const [fade, setFade] = useState(true);

  function companyButtonClick(event) {
    event.preventDefault();
    changeTargetID((a) => event.target.id);
    changeDescription(experienceData[event.target.id - 1].description);
    setFade((b) => false);
    return;
  }

  return (
    <div className="work-exprience container flex flex-wrap" id="work">
      <div className="button-container w-1/2 space-y-2">
        {experienceData.map((val) => (
          <button
            id={val.id}
            onClick={companyButtonClick}
            className="work-buttons
            text-left
            px-2
            h-14
            ml-[50px]
            lg:ml-[75px]
            font-black
            border-2
            border-black
            rounded-2xl
            bg-white
            transition ease-out delay-400
            hover:translate-x-4
            hover:shadow-[-5px_0px_5px_-1px_rgba(0,0,0,0.3)] 
            hover:shadow-black
            hover:bg-black
            sm:w-auto
            lg:h-10
            lg:w-1/2
            "
          >
            {val.companyName + " " + val.duration}
          </button>
        ))}
      </div>
      <div className={`transition-all ease-in duration-300 ${
            !fade ? 'max-h-[324px]' : 'max-h-0'
          } lg:w-1/2 lg:p-0 sm:pt-8 space-y-2 h-auto `}>
        
            <ul className={`list-disc  transition-all ease-in duration-200 delay-100 ${
              !fade ? 'opacity-100' : 'opacity-0'} `}>
            {experienceDescription.map((desc) => (
              <li className={`font-semibold text-xl`}>{desc}</li>
            ))}
            </ul>
      </div>
    </div>
  );
}
