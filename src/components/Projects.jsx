import React from "react";

const Projects = () => {

  const projects = [
    {
      id: "1",
      title: "Pomodee",
      description: "Pomodee",
      image: "img/pomodee.jpg",
      link: "https://pomodee.com",
    },
    {
      id: "2",
      title: "HandyChef",
      description: "HandyChef",
      image: "img/handychef.jpg",
      link: "https://www.handychef.ca/",

    },
    {
      id: "3",
      title: "Splink",
      description: "Mobile App",
      image: 'img/pomodee.jpg',
      link: "https://www.splink.ca/",
    },
    {
      id: "4",
      title: "Dustypaws ",
      description: "Product",
      image: "img/handychef.jpg",
      link: "https://dustypaws.co/",
    },
    {
      id: "5",
      title: "People and Cars",
      description: "proof of concept",
      image: "img/pomodee.jpg",
      link: "https://dustypaws.co/",
    },
    {
      id: "6",
      title: "AI web app",
      description: "proof of concept",
      image: "img/handychef.jpg",
      link: "https://dustypaws.co/",
    }, {
      id: "7",
      title: "Product View",
      description: "proof of concept",
      image: "img/pomodee.jpg",
      link: "https://ecommerce-olive.vercel.app/",
    },
    {
      id: "8",
      title: "Rest Countries API",
      description: "proof of concept",
      image: "img/handychef.jpg",

      link: "https://my-tailwind-project.vercel.app/",

    },
    {
      id: "9",
      title: "Splink",
      description: "Mobile App",
      image: 'img/pomodee.jpg',
      link: "https://www.splink.ca/",
    },
    {
      id: "10",
      title: "Dustypaws ",
      description: "Product",
      image: "img/handychef.jpg",
      link: "https://dustypaws.co/",
    },
    {
      id: "11",
      title: "People and Cars",
      description: "proof of concept",
      image: "img/pomodee.jpg",
      link: "https://dustypaws.co/",
    },
    {
      id: "12",
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
            <div className="slide" key={project.id}>
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
