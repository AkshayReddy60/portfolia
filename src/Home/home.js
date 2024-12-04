import React from "react";
import './home.css';
import profile from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';

function Home(){
    const handleOpen=()=>{
        window.open(resume)
    }
    return(
        <>
        <div className="intro" id='home'>
            <img  className="imgse" src={profile} alt="profile"/>
            <div className="con">
                <span className="aaaa">Hello Everyone</span><br></br>
                <span className="aa">I'm Akshay Reddy Vangala</span><br></br>
                <span className="aaa">I am a<span className="ex"> developer</span></span><br></br>
            
                <div className="contactinformation">
                    <p >+91 8639602993</p>
                    <p ><a  className="eee" href="mailto:akshayreddyvangala60@gmail,com">akshayreddyvangala60@gmail.com </a></p>
                    <p>Kazipet, Warangal, Telangana</p>
                    

                </div>
                
            


            </div>

        </div>
        <div className="phar">
                    <p>
                        I’m Akshay Reddy Vangala, a recent  graduate with passion for software development. I have hands-on experience in Java
                        and Python, complemented by skills in web technologies like HTML, CSS,
                        ,JavaScript and Sql. My projects, including a Curd application, Ecommerce website , reflect my ability
                        to blend technical expertise with innovative solutions. I’m eager to
                        leverage my skills in a fast-paced development environment to drive
                        impactful results . I am Learning Node.js for Backend and i will implemnet the project using it.
                    </p>
                    <button className="resumee" onClick={handleOpen}> My Resume</button>
                        
        </div>
        </>
    )

}
export default Home;