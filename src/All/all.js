import React from "react";
import './all.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';
import a4 from '../assets/a4.png';
import a5 from '../assets/a5.png';
import a6 from '../assets/a6.png';
import a7 from '../assets/a7.png';
import a8 from '../assets/a8.png';
import a9 from '../assets/a9.png';
import a10 from '../assets/a10.png';
import a11 from '../assets/a11.png';


function All(){
    return(
        <>
        <div className="alllabout">
            <img className="projectim" src={project1} alt="Project One" 
                onClick={() => window.location.href = 'https://akshayreddy60.github.io/assignment/'}/>
                <img className="projectim" src={project2} alt="Project One"  
                onClick={() => window.location.href = 'https://akshayreddy60.github.io/ntech/'}/>
                <img className="projectim" src={project3} alt="Project One"  
                onClick={() => window.location.href = 'https://akshayreddy60.github.io/demoo_first/'}/>

            <img  className="imggg" src={a1} alt="a1"/>
            <img  className="imggg" src={a2} alt="a2"/>
            <img  className="imggg" src={a3} alt="a3"/>
            <img  className="imggg" src={a4} alt="a4"/>
            <img  className="imggg" src={a5} alt="a5"/>
            <img  className="imggg" src={a6} alt="a6"/>
            <img  className="imggg" src={a7} alt="a7"/>
            <img  className="imggg" src={a8} alt="a8"/>
            <img  className="imggg" src={a9} alt="a9"/>
            <img  className="imggg" src={a10} alt="a10"/>
            <img  className="imggg" src={a11} alt="a11"/>  

        


        </div>

        </>
    )
}
export default All;
