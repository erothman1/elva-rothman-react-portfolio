import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink, faBriefcase, faBook, faAddressBook } from '@fortawesome/free-solid-svg-icons'

export default function Nav({ currentPage, pageChangeHandler }) {
    return (
        <div className="header">
            <h2 className="myName">Elva Rothman</h2>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => { pageChangeHandler("AboutMe") }}
                            className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
                        ><FontAwesomeIcon icon={faFaceSmileWink} /> About Me
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#portfolio"
                            onClick={() => { pageChangeHandler("Portfolio") }}
                            className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                        ><FontAwesomeIcon icon={faBriefcase} /> Portfolio
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#resume"
                            onClick={() => { pageChangeHandler("Resume") }}
                            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                        ><FontAwesomeIcon icon={faBook} /> Resume
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={() => { pageChangeHandler("Contact") }}
                            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                        ><FontAwesomeIcon icon={faAddressBook} /> Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}