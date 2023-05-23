import React from "react"

export default function Footer({currentPage}) {
    const isFixedPosition = currentPage === "AboutMe" || currentPage === "Contact"

    return (
        <footer className={isFixedPosition ? "fixed-footer" : ""}>
            <a href="https://github.com/erothman1">GitHub</a>
            <a href="https://www.linkedin.com/in/elva-rothman-91222620a/">LinkedIn</a>
            <a href="https://twitter.com/elvacodes">Twitter</a>
        </footer>
    )
}