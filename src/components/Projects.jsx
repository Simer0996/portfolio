import React from "react";

const Projects = () => {

  const projects = [
    {
      title: "Product View",
      description: "proof of concept",
      image: "img/pomodee.jpg",
      link: "https://ecommerce-olive.vercel.app/",
    },
    {
      title: "Rest Countries API",
      description: "proof of concept",
      image: "img/handychef.jpg",

      link: "https://my-tailwind-project.vercel.app/",

    },
    {
      title: "Splink",
      description: "Mobile App",
      image: 'img/pomodee.jpg',
      link: "https://www.splink.ca/",
    },
    {
      title: "Dustypaws ",
      description: "Product",
      image: "img/handychef.jpg",
      link: "https://dustypaws.co/",
    },
    {
      title: "People and Cars",
      description: "proof of concept",
      image: "img/pomodee.jpg",
      link: "https://dustypaws.co/",
    },
    {
      title: "AI web app",
      description: "proof of concept",
      image: "img/handychef.jpg",
      link: "https://dustypaws.co/",
    },{
      title: "Product View",
      description: "proof of concept",
      image: "img/pomodee.jpg",
      link: "https://ecommerce-olive.vercel.app/",
    },
    {
      title: "Rest Countries API",
      description: "proof of concept",
      image: "img/handychef.jpg",

      link: "https://my-tailwind-project.vercel.app/",

    },
    {
      title: "Splink",
      description: "Mobile App",
      image: 'img/pomodee.jpg',
      link: "https://www.splink.ca/",
    },
    {
      title: "Dustypaws ",
      description: "Product",
      image: "img/handychef.jpg",
      link: "https://dustypaws.co/",
    },
    {
      title: "People and Cars",
      description: "proof of concept",
      image: "img/pomodee.jpg",
      link: "https://dustypaws.co/",
    },
    {
      title: "AI web app",
      description: "proof of concept",
      image: "img/handychef.jpg",
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
