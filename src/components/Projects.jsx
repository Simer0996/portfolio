import React from "react";
import { Link } from "react-router-dom"

const Projects = ({ projects }) => {



  return (
    <>
      <div className="slider m-auto">
        <div className="slide-track m-5">
          {projects.map(project => (
            <div className="slide" key={project.id}>
              <Link to={`/project/${project.id}`}><img src={project.image} alt={project.title} className="imgBoxShadow" /></Link>
            </div>
          ))}
        </div>
      </div >
    </>
  )
};

export default Projects;
