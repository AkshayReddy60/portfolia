import React from "react";
import './skill.css';
 
function Skills(){
    return(
        <>
        <div className="skillsss" id="skill">
            <h1>My Skills</h1>
            <div className="linee"></div>
        </div>  
        <div className="frontback">
           <div className="frontend">
            <h2 className="midd">Frontend developer</h2>
            <div>
                <h3>HTML</h3>
                <p>Expert</p>

            </div>
            <div>
                <h3>Css</h3>
                <p>Expert</p>

            </div>
            <div>
                <h3>JavaScript</h3>
                <p>Intermediate</p>

            </div>
            <div>
                <h3>React</h3>
                <p>Intermediate</p>

            </div>
            <div>
                <h3>Angular</h3>
                <p>Intermediate</p>

            </div>
            <div>
                <h3>Bootstrap</h3>
                <p>Intermediate</p>

            </div>
            <div>
                <h3>Material UI</h3>
                <p>Intermediate</p>

            </div>
           </div> 
        <div className="backend">
            <h2 className="midd" >Backend Developer</h2>
            <div>
                <h3>Python</h3>
                <p>Expert</p>

            </div>
            <div>
                <h3>Java</h3>
                <p>Intermediate</p>

            </div>
            <div>
                <h3>Node.Js</h3>
                <p>Basic</p>

            </div>
            <div>
                <h3>Sql</h3>
                <p>Intermediate</p>

            </div>



        </div>


        
        </div>

        </>
    )
}
export default Skills;