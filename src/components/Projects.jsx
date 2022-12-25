import React from "react";


const Projects = () => {

  const projects = [
    {
      title: "Product View",
      description: "proof of concept",
      image: "img/portfolio/ecom.svg",
      link: "https://ecommerce-olive.vercel.app/",
    },
    {
      title: "Rest Countries API",
      description: "proof of concept",
      image: "img/portfolio/countries.svg",
      link: "https://my-tailwind-project.vercel.app/",
    },
    {
      title: "Splink",
      description: "Mobile App",
      image: 'img/portfolio/splink.svg',
      link: "https://www.splink.ca/",
    },
    {
      title: "Dustypaws ",
      description: "Product",
      image: "img/portfolio/dustypaws.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "People and Cars",
      description: "proof of concept",
      image: "img/portfolio/cars.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "AI web app",
      description: "proof of concept",
      image: "img/portfolio/AIWeb.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "Product View",
      description: "proof of concept",
      image: "img/portfolio/ecom.svg",
      link: "https://ecommerce-olive.vercel.app/",
    },
    {
      title: "Rest Countries API",
      description: "proof of concept",
      image: "img/portfolio/countries.svg",
      link: "https://my-tailwind-project.vercel.app/",
    },
    {
      title: "Splink",
      description: "Mobile App",
      image: 'img/portfolio/splink.svg',
      link: "https://www.splink.ca/",
    },
    {
      title: "Dustypaws ",
      description: "Product",
      image: "img/portfolio/dustypaws.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "People and Cars",
      description: "proof of concept",
      image: "img/portfolio/cars.svg",
      link: "https://dustypaws.co/",
    },
    {
      title: "AI web app",
      description: "proof of concept",
      image: "img/portfolio/AIWeb.svg",
      link: "https://dustypaws.co/",
    }
  ]

  


  return (
<>
<div className="slider w-[75%] m-auto" style={{
  border:"2px solid white",
  borderShadow:"0 0 10px #ff9760,0 0 20px #ff9760,0 0 40px #ff9760,0 0 80px #ff9760,0 0 160px #ff9760,0 0 320px #ff9760"
}}>
  <ul className="slide-track m-5">
        {projects.map(project => (
        <li className="slide"><a href={project.link}><img src={project.image} alt={project.title}/></a>
        </li>
    ))}
</ul>
      </div>
</>
  )
};

export default Projects;
