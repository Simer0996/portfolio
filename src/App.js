// import "./App.css"
import Header from "./components/Header"
import Landing from "./components/Landing"
import Social from "./components/Social"
import Contact from "./components/Contact"

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
      <Social />
      <Contact />
    </div>
  )
}

export default App
