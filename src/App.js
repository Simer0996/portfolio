import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import ProjectDetails from './pages/ProjectDetails'

const App = () => {


  const projects = [
    {
      id: "1",
      title: "Pomodee",
      description: "Pomodee is the type of pomodoro timer which is fun and network driven. This platform allow users to connect with each other and share their accomplishments with the world. Additionally, the app also allow users to collaborate in real time with their friends and colleagues. ",
      image: "img/pomodee.jpg",
      link: "https://pomodee.com",
      github: "https://github.com/team1-pomodee/pomodo-client"
    },
    {
      id: "2",
      title: "HandyChef",
      description: "HandyChef is a cross-platform mobile application which connects independent chefs with clients to a private restaurant experience to client's homes at an affordable rate. Both chefs and clients are able to have their tailored dining experience booked,managed, and reviewed in a single application with a simple and secure payment procedure.",
      image: "img/handychef.jpg",
      link: "https://www.handychef.ca/",
      github: "https://github.com/Dwayne01/handy-chef",
    },
    {
      id: "3",
      title: "FlagApp",
      description: "This is an simple flag app who allows users an extensive knowledge of any specific countries, Their Flag, and many more....",
      image: 'img/flag.png',
      link: "https://delightful-llama-4e61be.netlify.app/",
      github: "https://github.com/Simer0996/flagapp.git"
    },
    {
      id: "4",
      title: "GraphQlAuth",
      description: "This project is about the demonstration of the Authentication flow in any Application with the usage of technologies such as React, Graphql, NoSQL(MongoDB), and JWT Token which is stored in the local storage of the browser.  ",
      image: "img/GraphqlAuth.png",
      link: "https://63b48aa3b7df063911c9b53a--tiny-chaja-6ed1ca.netlify.app/register",
      github: "https://github.com/Simer0996/authentication"
    },
    {
      id: "5",
      title: "People/Cars",
      description: "This app is based on the CRUD Technique to demonstrate the working of Graphql at both FrontEnd and BackEnd.",
      image: "img/people.png",
      link: "",
      github: "https://github.com/Simer0996/GraphQl"
    },
    {
      id: "6",
      title: "An Blog App",
      description: "This app is basically based on CRUD technique. -It is the simple personal blog app in which user can create, read ,update and delete the blog created within thi app.",
      image: "img/blog.png",
      link: "",
      github: "https://github.com/Simer0996/Blog-App"
    },
    {
      id: "7",
      title: "Pomodee",
      description: "Pomodee is the type of pomodoro timer which is fun and network driven. This platform allow users to connect with each other and share their accomplishments with the world. Additionally, the app also allow users to collaborate in real time with their friends and colleagues. ",
      image: "img/pomodee.jpg",
      link: "https://pomodee.com",
      github: "https://github.com/team1-pomodee/pomodo-client"
    },
    {
      id: "8",
      title: "HandyChef",
      description: "HandyChef is a cross-platform mobile application which connects independent chefs with clients to a private restaurant experience to client's homes at an affordable rate. Both chefs and clients are able to have their tailored dining experience booked,managed, and reviewed in a single application with a simple and secure payment procedure.",
      image: "img/handychef.jpg",
      link: "https://www.handychef.ca/",
      github: "https://github.com/Dwayne01/handy-chef",
    },
    {
      id: "9",
      title: "FlagApp",
      description: "This is an simple flag app who allows users an extensive knowledge of any specific countries, Their Flag, and many more....",
      image: 'img/flag.png',
      link: "https://delightful-llama-4e61be.netlify.app/",
      github: "https://github.com/Simer0996/flagapp.git"
    },
    {
      id: "10",
      title: "GraphQlAuth",
      description: "This is an simple post application with a purpose of demonstrating the authentication flow and various crucial security features In this an simple body of post can be added by a user and only the user who added the post have authorization to delete it.The backend server side of the app is managed using the graphql and the Api has been hosted via AWS Services.JWT Authentication has been implemented with the expiry time of 1hr  ",
      image: "img/GraphqlAuth.png",
      link: "https://63b48aa3b7df063911c9b53a--tiny-chaja-6ed1ca.netlify.app/register",
      github: "https://github.com/Simer0996/authentication"
    },
    {
      id: "11",
      title: "People/Cars",
      description: "This app is based on the CRUD Technique to demonstrate the working of Graphql at both FrontEnd and BackEnd.",
      image: "img/people.png",
      link: "",
      github: "https://github.com/Simer0996/GraphQl"
    },
    {
      id: "12",
      title: "An Blog App",
      description: "This app is basically based on CRUD technique. -It is the simple personal blog app in which user can create, read ,update and delete the blog created within thi app.",
      image: "img/blog.png",
      link: "",
      github: "https://github.com/Simer0996/Blog-App"
    },]

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