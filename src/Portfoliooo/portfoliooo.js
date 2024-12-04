import React, { useState } from "react";
import All from "../All/all.js";
import Projects from "../Projects/projects.js"
import Certifications from "../Certifications/certification.js";
import "./portfoliooo.css";

function Portfoliooo() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const renderContent = () => {
        switch (selectedCategory) {
            case "Projects":
                return <Projects />;
            case "Certifications":
                return <Certifications />;
            default:
                return <All />;
        }
    };

    return (
        <div className="portfol" id="portfoliooo">
            <div className="portcon">
                <h1>Portfolio</h1>
                <div className="line20"></div>
                <div className="heading">
                    
                        <ul>
                            <li onClick={() => setSelectedCategory("ALL")}>ALL</li>
                            <li onClick={() => setSelectedCategory("Projects")}>Projects</li>
                            <li onClick={() => setSelectedCategory("Certifications")}>Certifications</li>
                        </ul>
                    
                </div>
                
                <div className="content-container">{renderContent()}</div>
            </div>
        </div>
    );
}

export default Portfoliooo;
