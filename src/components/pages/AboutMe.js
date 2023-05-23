import React from "react"
import avatar from "../../assets/images/avatar.png"

export default function AboutMe() {
    return (
        <div className="aboutContainer">
            <div className="textContent">
                <h1>Get To Know Me</h1>
                <p className="aboutMe">
                    Hi 👋🏻 I'm Elva. I am a Full Stack Developer.
                </p>
                <p className="aboutMe">
                    I graduated from Tulane University in May 2022 with a degree in Psychology and Social Innovation & Social Entrepreneurship. Along with this, I have a Full-Stack Web Development Certification from the University of Pennsylvania where I learned how to design, develop, and launch web applications using HTML5, CSS3, Javascript, jQuery, Bootstrap, Bulma, Node.JS, MySQL, MongoDB, Express, Handlebars, React, GraphQL, Jest, and Git. I love problem solving, designing systems, and creating applications from scratch. In addition, I am extremely interested in the intersection of ethics and technology in regards to data, people, and processes. I strive for a world in which technology and code is ethical, just, and unbiased.
                </p>
                <p className="quote aboutMe">
                    "If you're the smartest person in the room, you're in the wrong room"
                </p>
            </div>
            <div className="avatarContainer">
                <img src={avatar} alt="avatar of me" className="avatar"></img>
            </div>
        </div>
    )
}