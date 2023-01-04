import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import ProjectDetails from './pages/ProjectDetails'

const App = () => {

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
      title: "FlagApp",
      description: "FlagApp",
      image: 'img/flag.png',
      link: "https://delightful-llama-4e61be.netlify.app/",
    },
    {
      id: "4",
      title: "GraphQlAuth",
      description: "Auth",
      image: "img/GraphqlAuth.png",
      link: "https://63b48aa3b7df063911c9b53a--tiny-chaja-6ed1ca.netlify.app/register",
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/project/:id" element={< ProjectDetails projects={projects} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App