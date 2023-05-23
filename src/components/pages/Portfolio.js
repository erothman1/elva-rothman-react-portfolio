import React from "react"
import projects from "../../myWork"

export default function Portfolio() {
    return (
        <div>
            <h1>My Recent Works</h1>
            <div className="container ">
                <div className="row ">
                    {projects.map((project) => (
                        <div className="col-md-4" key={project.id}>
                            <div className="card">
                                <img className="projectImage" src={project.image} class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title center">{project.name}</h5>
                                    <p className="card-text">{project.tech}</p>
                                    <div className="center">
                                        <a href={project.github} className="btn btn-outline-dark githubButton">Github</a>
                                        {project.deployed && (
                                            <a href={project.deployed} className="btn btn-outline-dark deployedButton">Deployed</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}