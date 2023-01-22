import React from 'react'
import { useParams, Link } from "react-router-dom"
import Footer from "../components/Footer"


const ProjectDetails = ({ projects }) => {

    const { id } = useParams()
    return (<>
        <div className="block w-[80%] mt-[50px] mb-[100px] m-auto">
            <Link to="/"><button className="buttonStyling mb-[50px]">Back</button></Link>
            {projects.map((project) => (
                <div key={project.id}>
                    {id === project.id ?
                        <div className="mt-[-90px]">
                            <p className="text-white text-2xl text-center mb-[20px] error-styling">{project.title}</p>
                            <img src={`/${project.image}`} alt={project.id} className="w-[70%] h-[500px] object-cover block m-auto" />
                            <p className="text-white lg:w-[700px] block m-auto pt-[20px]">{project.description}</p>
                            <p className="text-white lg:w-[700px] block m-auto pt-[20px]"><span className="heading-styling">Front-end Technologies:</span> {project.frontTechnologies}</p>
                            <p className="text-white lg:w-[700px] block m-auto pt-[20px]"><span className="heading-styling">Back-end Technologies:</span> {project.backTechnologies}</p>
                            <p className="text-white lg:w-[700px] block m-auto pt-[20px]"><span className="heading-styling">Hosting Services:</span> {project.HostingServices}</p>
                            <div className="flex justify-center align-middle pt-[20px]">
                                <a href={project.github} target="_blank" rel="noopener noreferrer"><button className="bg-white p-2 buttonStyling" >View Source</button></a>
                                {project.link === "" ? <button className=" p-1 ml-[20px] inProgressStyling" > Live Site in Progress</button> : <a href={project.link} target="_blank" rel="noopener noreferrer"><button className="bg-white p-2 ml-[20px] buttonStyling" > Live Site</button></a>}
                            </div>
                        </div> : <></>}
                </div>
            ))}

        </div>
        <Footer />
    </>
    )
}

export default ProjectDetails