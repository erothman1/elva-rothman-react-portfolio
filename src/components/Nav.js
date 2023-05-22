import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink, faBriefcase, faBook, faAddressBook } from '@fortawesome/free-solid-svg-icons'

export default function Nav({ currentPage, pageChangeHandler }) {
    return (
        <div>
            
        <ul className="nav nav-tabs">
        <h2 className="navName">Elva</h2>
            <li className="nav-item">
                <a 
                    href="#about"
                    onClick={() => {pageChangeHandler("AboutMe")}}
                    className={"nav-link"}
                ><FontAwesomeIcon icon={faFaceSmileWink} /> About Me
                </a>
            </li>
                
            <li className="nav-item">
                <a 
                    href="#portfolio"
                    onClick={() => {pageChangeHandler("Portfolio")}}
                    className={"nav-link"}
                ><FontAwesomeIcon icon={faBriefcase} /> Portfolio
                </a>
            </li>

            <li className="nav-item">
                <a 
                    href="#resume"
                    onClick={() => {pageChangeHandler("Resume")}}
                    className={"nav-link"}
                ><FontAwesomeIcon icon={faBook} /> Resume
                </a>
            </li>

            <li className="nav-item">
                <a 
                    href="#contact"
                    onClick={() => {pageChangeHandler("Contact")}}
                    className={"nav-link"}
                ><FontAwesomeIcon icon={faAddressBook} /> Contact
                </a>
            </li>
        </ul>
        </div>
    )
}