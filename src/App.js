// import "./App.css"
import Header from "./components/Header"
import Landing from "./components/Landing"

import Contact from "./components/Contact"
import About from "./components/About"

// import {
//   FaSun,
//   FaMoon,
//   FaInstagram,
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <Landing />
      <Header />
      
      <About/>
      <Contact />
    </div>
  )
}

export default App
