import { useState } from "react";
import "../styling/WorkExperienceSection.css"
import { Container } from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function WorkExperienceSection(props){
    const [value, setValue] = useState([1, 3]);

    function onClick(){
        return;
    }

    return(
        <div className="workExeperience-body">
            <div className="workExeperience-title-desktop">
                <h1>/* Work Experience */</h1>
            </div>
        </div>
    )
}

export default WorkExperienceSection;