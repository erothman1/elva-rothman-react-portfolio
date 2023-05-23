import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer({currentPage}) {
    const isFixedPosition = currentPage === "AboutMe" || currentPage === "Contact"

    return (
        <footer className={isFixedPosition ? "fixed-footer" : ""}>
            <a className="footerButtons" href="https://github.com/erothman1"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
            <a className="footerButtons" href="https://www.linkedin.com/in/elva-rothman-91222620a/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a className="footerButtons" href="https://twitter.com/elvacodes"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
        </footer>
    )
}