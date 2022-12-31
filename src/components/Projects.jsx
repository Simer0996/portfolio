import React from "react";

const Projects = () => {


  const projects = [
    {
      title: "HandyChef",
      description: "handyChef",
      image: "img/projects/handychef.svg",
      link: "https://www.handychef.ca/",
    },
    {
      title: "Pomodee",
      description: "Pomodee",
      image: "img/projects/pomodee.svg",
      link: "https://pomodee.com",
    },
    {
      title: "title3",
      description: "Mobile App",
      image: "img/projects/handychef.svg",
      link: "https://www.splink.ca/",
    },
    {
      title: "title4 ",
      description: "Product",
      image: "img/projects/handychef.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title5",
      description: "proof of concept",
      image: "img/projects/handychef.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title6",
      description: "proof of concept",
      image: "img/projects/handychef.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title7",
      description: "handyChef",
      image: "img/projects/handychef.svg",
      link: "https://www.handychef.ca/",
    },
    {
      title: "title8",
      description: "Pomodee",
      image: "img/projects/handychef.svg",
      link: "https://pomodee.com",
    },
    {
      title: "title9",
      description: "Mobile App",
      image: "img/projects/handychef.svg",
      link: "https://www.splink.ca/",
    },
    {
      title: "title10 ",
      description: "Product",
      image: "img/projects/handychef.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title11",
      description: "proof of concept",
      image: "img/projects/handychef.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title12",
      description: "proof of concept",
      image: "img/projects/handychef.svg",
      link: "https://dustypaws.co/",
    }
  ]

  return (
<>
<div className="slider m-auto">
  <div className="slide-track m-5">
        {projects.map(project => (
         <div className="slide" key={project.title}>
            console.log(project.image)
            <a href={project.link}><img src={project.image} alt={project.title} className="imgBoxShadow" target="blank" />
          
            </a>
          </div>
    ))}
</div>
      </div>
</>
  )
};

export default Projects;
