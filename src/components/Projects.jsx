import React from "react";
import { Col } from "react-bootstrap";

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
<div className="slider m-auto">
  <div className="slide-track m-5">
        {projects.map(project => (
          <Col size={12} sm={6} md={4}>
          <div className="slide">
            <a href={project.link}><img src={project.image} alt={project.title}/></a>
            
          </div>
        </Col>
    ))}
</div>
      </div>
</>
  )
};

export default Projects;
