import React from "react";


const Projects = () => {

  const projects = [
    {
      title: "pomodee",
      description: "proof of concept",
      image: "img/portfolio/ecom.svg",
      link: "https://ecommerce-olive.vercel.app/",
    },
    {
      title: "HandyChef",
      description: "proof of concept",
      image: "img/portfolio/countries.svg",
      link: "https://my-tailwind-project.vercel.app/",
    },
    {
      title: "title3",
      description: "Mobile App",
      image: 'img/portfolio/splink.svg',
      link: "https://www.splink.ca/",
    },
    {
      title: "title4 ",
      description: "Product",
      image: "img/portfolio/dustypaws.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title5",
      description: "proof of concept",
      image: "img/portfolio/cars.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title6",
      description: "proof of concept",
      image: "img/portfolio/AIWeb.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title7",
      description: "proof of concept",
      image: "img/portfolio/ecom.svg",
      link: "https://ecommerce-olive.vercel.app/",
    },
    {
      title: "title8",
      description: "proof of concept",
      image: "img/portfolio/countries.svg",
      link: "https://my-tailwind-project.vercel.app/",
    },
    {
      title: "title9",
      description: "Mobile App",
      image: 'img/portfolio/splink.svg',
      link: "https://www.splink.ca/",
    },
    {
      title: "title10 ",
      description: "Product",
      image: "img/portfolio/dustypaws.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title11",
      description: "proof of concept",
      image: "img/portfolio/cars.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "title12",
      description: "proof of concept",
      image: "img/portfolio/AIWeb.svg",
      link: "https://dustypaws.co/",
    }
  ]

  return (
<>
<div className="slider m-auto">
  <div className="slide-track m-5">
        {projects.map(project => (
       
          <div className="slide">
            <a href="/"><div className="imgBoxShadow text-white" >{project.title}</div></a> 
          </div>
        
    ))}
</div>
      </div>
</>
  )
};

export default Projects;
