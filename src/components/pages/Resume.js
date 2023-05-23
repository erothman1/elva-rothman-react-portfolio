import React from "react"
import myResume from "../../assets/pdf/elvaRothmanResume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Resume() {
    return (
        <div>
            {/* <h1>Resume</h1> */}
            <a href={myResume} download="elvaRothmanResume.pdf" className="downloadButton">
                <button type="button" className="btn btn-outline-dark"><FontAwesomeIcon icon={faCloudArrowDown} />  Download resume</button>
            </a>
            <embed src={myResume} type="application/pdf" width="100%" height="600px" />
            {/* <h2>Front End Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Handlebars</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Responsive Design</li>
            </ul>
            <br></br>
            <h2>Back End Skills</h2>
            <ul>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MYSQL, Sequelize</li>
                <li>Javascript</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
            </ul>
            <br></br>
            <h2>Other Skills</h2>
            <ul>
                <li>Git</li>
                <li>Jest</li>
                <li>Problem solving</li>
                <li>Creativity</li>
                <li>Detail-oriented</li>
                <li>Organization</li>
                <li>Fast learner</li>
            </ul> */}
        </div>
    )
}