import React from "react";
import './project.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

function Project() {
    return (
        <div className="projectsssss">
            <div className="proje">
                <img className="projectim" src={project1} alt="Project One" 
                 onClick={() => window.location.href = 'https://akshayreddy60.github.io/assignment/'}/>
                <img className="projectim" src={project2} alt="Project One"  
                onClick={() => window.location.href = 'https://akshayreddy60.github.io/ntech/'}/>
                <img className="projectim" src={project3} alt="Project One"  
                onClick={() => window.location.href = 'https://akshayreddy60.github.io/demoo_first/'}/>
            </div>
            
        </div>
    );
}

export default Project;
