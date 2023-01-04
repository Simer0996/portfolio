import React from 'react'
import { useParams, Link } from "react-router-dom"



const ProjectDetails = ({ projects }) => {

    const { id } = useParams()
    return (
        <div className="block w-[80%] mt-[50px] m-auto">

            <Link to="/"><button className="buttonStyling mb-[50px]">Back</button></Link>
            {projects.map((project) => (
                <div key={project.id}>
                    {id === project.id ? <div>  <p className="text-white text-2xl text-center mb-[20px] error-styling">{project.title}</p><img src={`/${project.image}`} alt={project.id} className="w-[580px] h-[400px] object-cover block m-auto" />

                        <p className="text-white">{project.description}</p></div> : <></>}
                </div>
            ))}

        </div>
    )
}

export default ProjectDetails