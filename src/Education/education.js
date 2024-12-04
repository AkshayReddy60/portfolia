import React from "react";
import './education.css';

function Education(){
    return(
        <>
        <div className="Edu" id="education">
            <h1>My Education</h1>
            <div className="detailes">    
                <section className="educationsec">
                    <div className="headinggg">Education</div>
                    <div className="educationde">
                        <div className="educationitem">
                            <p>September 2020 - May 2024</p>
                            <h2>Sr University</h2>
                            <p>Bachelor of Technology in Electronics and Communication Engineering</p>
                            <p>GPA:- 76%</p>

                        </div>
                        <div className="educationitem2">
                            <p>July 2018 - Feb 2020</p>
                            <h2>Sr Junior Collage</h2>
                            <p>Board of Intermediate Education</p>
                            <p>GPA:- 80%</p>

                        </div>
                        <div className="educationitem3">
                            <p>March 2018</p>
                            <h2>St Anns High School</h2>
                            <p>Board of Secondary Education</p>
                            <p>CGPA:- 8.7</p>

                        </div>

                    </div>

                </section>
            </div>
           
        </div>
        

        </>
    )
}
export default Education;
