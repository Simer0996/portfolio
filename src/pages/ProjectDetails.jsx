import React from 'react'
import { useParams, Link } from "react-router-dom"



const ProjectDetails = ({ projects }) => {

    const { id } = useParams()
    return (
        <div className="block w-[80%] mt-[50px] m-auto">
            <Link to="/"><button className="buttonStyling mb-[50px]">Back</button></Link>
            {projects.map((project) => (
                <div key={project.id}>
                    {id === project.id ?
                        <div className="mt-[-90px]">
                            <p className="text-white text-2xl text-center mb-[20px] error-styling">{project.title}</p>
                            <img src={`/${project.image}`} alt={project.id} className="w-[600px] h-[400px] object-cover block m-auto" />
                            <p className="text-white lg:w-[50%] block m-auto pt-[20px]">{project.description}</p>
                            <div className="flex justify-center align-middle pt-[10px]">
                                <a href={project.github}><button className="bg-white p-2 buttonStyling" target="_blank" rel="noopener noreferrer">View Source</button></a>
                                <a href={project.link}><button className="bg-white p-2 ml-[20px] buttonStyling" target="_blank" rel="noopener noreferrer"> Live Site</button></a>
                            </div>
                        </div> : <></>}
                </div>
            ))}

        </div>
    )
}

export default ProjectDetails