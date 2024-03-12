import React from "react";
import "./style.css"

function Project () {
    return (
      
        <div class="portfolio" id="portfolio">
          <h2>My Portfolio</h2>
          <ul>

          <div className="container">
            <a href="https://paulooliveira152012.github.io/grads/"
            target="_blank"
            rel="noreferrer"
            class="project"
            id="grads"
            > <li className="grads"></li>
              <div class="title1">Grads</div>
            </a>
            </div>
            
            <div className="container">
            <a href="https://paulooliveira152012.github.io/runBuddy2/"
            target="_blank"
            rel="noreferrer"
            class="project"
            id="runBuddy"
            > <li className="runbuddy"></li>
              <div class="title1">Run Buddy</div>
            </a>
            </div>

            <div className="container">
            <a href="https://paulooliveira152012.github.io/horiseon-2-/"
            target="_blank"
            rel="noreferrer"
            class="project"
            id="horiseon"
            > <li className="horiseon"></li>
              <div class="title1">Horiseon</div>
            </a>
            </div>

            <div className="container">
            <a href="https://paulooliveira152012.github.io/weather/"
            target="_blank"
            rel="noreferrer"
            class="project"
            id="weather"
            > <li className="weather"></li>
              <div class="title1">Weather App</div>
            </a>
            </div>

            <div className="container">
            <a href="https://paulooliveira152012.github.io/password_generator/"
            target="_blank"
            rel="noreferrer"
            class="project"
            id="weather"
            > <li className="passwordGenerator"></li>
              <div class="title1">Password</div>
            </a>
            </div>

            <div className="container">
            <a href="https://paulooliveira152012.github.io/tic-tac-toe/"
            target="_blank"
            rel="noreferrer"
            class="project"
            id="weather"
            > <li className="tictactoe"></li>
              <div class="title1">Tic-Tac-Toe</div>
            </a>
            </div>
          </ul>
        </div>
        
    )
};

export default Project;