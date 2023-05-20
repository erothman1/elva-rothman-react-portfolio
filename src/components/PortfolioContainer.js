import React, { useState } from "react"
import Nav from "./Nav"
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume" 

export default function PortfolioContainer() {
    //set default for currentPage to be AboutMe page
    const [ currentPage, setCurrentPage ] = useState("AboutMe")

    //renderPage method returns the corresponding page component depending on the value of the currentPage state
    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />
        } else if (currentPage === "Portfolio") {
            return <Portfolio />
        } else if (currentPage === "Contact") {
            return <Contact />
        } else {
            return <Resume />
        }
    }

    //pageChangeHandler method sets current page
    const pageChangeHandler = (page) => setCurrentPage(page)

    return (
        <div>
            {/* passing currentPage state and pageChangeHandler function to Nav.js as props */}
            <Nav currentPage={currentPage} pageChangeHandler={pageChangeHandler} />

            {/* calling renderPage method returns a page component based on currentPage state */}
            {renderPage()}
        </div>
    )
}