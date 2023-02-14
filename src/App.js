import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import ProjectDetails from './pages/ProjectDetails'
import ReactGA from "react-ga"

const App = () => {


  const projects = [
    {
      id: "1",
      title: "Pomodee",
      description: "Pomodee is the type of pomodoro timer which is fun and network driven. This platform allow users to connect with each other and share their accomplishments with the world. Additionally, the app also allow users to collaborate in real time with their friends and colleagues. In this project, I worked as the full stack developer. From creating rest APIs for user authentication and App features to connecting the APIs at the front-end Application i.e. React",
      frontTechnologies: "React, Styled Components, CSS3",
      backTechnologies: "ExpressJS, NodeJS, MongoDB",
      HostingServices: "Netlify(React App), Heroku(Deploy the RestAPIs)",
      image: "img/pomodee.jpg",
      link: "https://63c9adbfe71a072600c4d8af--charming-chebakia-f3ec0c.netlify.app/home",
      github: "https://github.com/team1-pomodee/pomodo-client"
    },
    {
      id: "2",
      title: "HandyChef",
      description: "HandyChef is a cross-platform mobile application which connects independent chefs with clients to a private restaurant experience to client's homes at an affordable rate. Both chefs and clients are able to have their tailored dining experience booked,managed, and reviewed in a single application with a simple and secure payment procedure. In this application, I worked as the full stack developer. I was responsible for creating the RestAPIs and deployment of the created APIs on Heroku. Additionally, I've designed some of the features at the front side of an app. i.e. Models",
      frontTechnologies: "React-Native, NextJS(Marketing website), Tailwind CSS, CSS3 ",
      backTechnologies: "ExpressJS, NodeJS, MongoDB",
      HostingServices: "Expo (React-Native App), Heroku(Deploy the RestAPIs)",
      image: "img/handychef.jpg",
      link: "https://www.handychef.ca/",
      github: "https://github.com/Dwayne01/handy-chef",
    },
    {
      id: "3",
      title: "FlagApp",
      description: "This is an simple flag app who allows users an extensive knowledge of any specific countries, Their Flag, and many more... . This app is associated with the learning of the various technologies, including React, Tailwind CSS, deployment of a project on Heroku.",
      frontTechnologies: "React, Tailwind CSS, CSS3",
      backTechnologies: "None",
      HostingServices: "Heroku(Deploy the App)",
      image: 'img/flag.png',
      link: "https://delightful-llama-4e61be.netlify.app/",
      github: "https://github.com/Simer0996/flagapp.git"
    },
    {
      id: "4",
      title: "GraphQlAuth",
      description: "This project is about the demonstration of the Authentication flow in any Application with the usage of technologies such as React, Graphql, NoSQL(MongoDB), and JWT Token which is stored in the local storage of the browser.  ",
      frontTechnologies: "React, GraphQL-client, CSS3",
      backTechnologies: "GraphQL, ExpressJS, MongoDB",
      HostingServices: "Heroku(Deploy the App)",
      image: "img/GraphqlAuth.png",
      link: "https://63b48aa3b7df063911c9b53a--tiny-chaja-6ed1ca.netlify.app/register",
      github: "https://github.com/Simer0996/authentication"
    },
    {
      id: "5",
      title: "People/Cars",
      description: "This app is based on the CRUD Technique to demonstrate the working of Graphql at both FrontEnd and BackEnd.",
      frontTechnologies: "React, GraphQL-client, CSS3",
      backTechnologies: "GraphQL",
      HostingServices: "Heroku(Deploy the App)",
      image: "img/people.png",
      link: "",
      github: "https://github.com/Simer0996/GraphQl"
    },
    {
      id: "6",
      title: "An Blog App",
      description: "This app is basically based on CRUD technique. -It is the simple personal blog app in which user can create, read ,update and delete the blog created within the app.",
      frontTechnologies: "React, CSS3",
      backTechnologies: "Express JS, Node JS, MongoDB",
      HostingServices: "Heroku(Deploy the App)",
      image: "img/blog.png",
      link: "https://blog-app1.herokuapp.com/",
      github: "https://github.com/Simer0996/Blog-App"
    },
    {
      id: "7",
      title: "Pomodee",
      description: "Pomodee is the type of pomodoro timer which is fun and network driven. This platform allow users to connect with each other and share their accomplishments with the world. Additionally, the app also allow users to collaborate in real time with their friends and colleagues. In this project, I worked as the full stack developer. From creating rest APIs for user authentication and App features to connecting the APIs at the front-end Application i.e. React",
      frontTechnologies: "React, Styled Components, CSS3",
      backTechnologies: "ExpressJS, NodeJS, MongoDB",
      HostingServices: "Netlify(React App), Heroku(Deploy the RestAPIs)",
      image: "img/pomodee.jpg",
      link: "https://63c9adbfe71a072600c4d8af--charming-chebakia-f3ec0c.netlify.app/home",
      github: "https://github.com/team1-pomodee/pomodo-client"
    },
    {
      id: "8",
      title: "HandyChef",
      description: "HandyChef is a cross-platform mobile application which connects independent chefs with clients to a private restaurant experience to client's homes at an affordable rate. Both chefs and clients are able to have their tailored dining experience booked,managed, and reviewed in a single application with a simple and secure payment procedure. In this application, I worked as the full stack developer. I was responsible for creating the RestAPIs and deployment of the created APIs on Heroku. Additionally, I've designed some of the features at the front side of an app. i.e. Models",
      frontTechnologies: "React-Native, NextJS(Marketing website), Tailwind CSS, CSS3 ",
      backTechnologies: "ExpressJS, NodeJS, MongoDB",
      HostingServices: "Expo (React-Native App), Heroku(Deploy the RestAPIs)",
      image: "img/handychef.jpg",
      link: "https://www.handychef.ca/",
      github: "https://github.com/Dwayne01/handy-chef",
    },
    {
      id: "9",
      title: "FlagApp",
      description: "This is an simple flag app who allows users an extensive knowledge of any specific countries, Their Flag, and many more... . This app is associated with the learning of the various technologies, including React, Tailwind CSS, deployment of a project on Heroku.",
      frontTechnologies: "React, Tailwind CSS, CSS3",
      backTechnologies: "None",
      HostingServices: "Heroku(Deploy the App)",
      image: 'img/flag.png',
      link: "https://delightful-llama-4e61be.netlify.app/",
      github: "https://github.com/Simer0996/flagapp.git"
    },
    {
      id: "10",
      title: "GraphQlAuth",
      description: "This project is about the demonstration of the Authentication flow in any Application with the usage of technologies such as React, Graphql, NoSQL(MongoDB), and JWT Token which is stored in the local storage of the browser.  ",
      frontTechnologies: "React, GraphQL-client, CSS3",
      backTechnologies: "GraphQL, ExpressJS, MongoDB",
      HostingServices: "Heroku(Deploy the App)",
      image: "img/GraphqlAuth.png",
      link: "https://63b48aa3b7df063911c9b53a--tiny-chaja-6ed1ca.netlify.app/register",
      github: "https://github.com/Simer0996/authentication"
    },
    {
      id: "11",
      title: "People/Cars",
      description: "This app is based on the CRUD Technique to demonstrate the working of Graphql at both FrontEnd and BackEnd.",
      frontTechnologies: "React, GraphQL-client, CSS3",
      backTechnologies: "GraphQL",
      HostingServices: "Heroku(Deploy the App)",
      image: "img/people.png",
      link: "",
      github: "https://github.com/Simer0996/GraphQl"
    },
    {
      id: "12",
      title: "An Blog App",
      description: "This app is basically based on CRUD technique. -It is the simple personal blog app in which user can create, read ,update and delete the blog created within the app.",
      frontTechnologies: "React, CSS3",
      backTechnologies: "Express JS, Node JS, MongoDB",
      HostingServices: "Heroku(Deploy the App)",
      image: "img/blog.png",
      link: "https://blog-app1.herokuapp.com/",
      github: "https://github.com/Simer0996/Blog-App"
    },
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
