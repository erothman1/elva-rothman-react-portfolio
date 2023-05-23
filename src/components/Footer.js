import React from "react"

export default function Footer({currentPage}) {
    const isFixedPosition = currentPage === "AboutMe" || currentPage === "Contact"

    return (
        <footer className={isFixedPosition ? "fixed-footer" : ""}>
            <h3>Made With Love </h3>
        </footer>
    )
}