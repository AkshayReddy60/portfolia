import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <h1 className="nav-logo">My Portfolio</h1>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                    </div>
                    <div className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="home"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="education"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Education
                        </Link>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="skill"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="portfoliooo"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Portfolio
                        </Link>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="contact"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
