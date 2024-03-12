import React from "react";
import "./style.css";
// import resume from "../../docs/resume.pdf"
// import myResume from "../../docs/myResume.pdf"
import Paulo_resume from "../../docs/Paulo_Oliveira_Resume.pdf"

function Nav({page, handleChange}) {
    return (
        <div class="nav">
          <ul>
            <li><a href="#aboutMe" onClick={() => handleChange("AboutMe")}>About Me</a></li>
            <li><a href="#projects" onClick={ () => handleChange("Project")}>Projects</a></li>
            <li><a href="#contactMe" onClick= {() => handleChange("ContactMe")}>Contact</a></li>
            <li><a href={Paulo_resume}download>Resume</a></li>
          </ul>
        </div>
    )
};

export default Nav;