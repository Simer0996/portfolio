// import "./App.css"
// import Header from "./components/Header"
import Home from "./components/Home"
import HeaderNav from "./components/HeaderNav"
import Contact from "./components/Contact"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Home />
      {/* <Header /> */}
      <Skills/>
      <div style={{marginTop:"40px", marginBottom:"40px"}}>
      <Projects />
      </div>
      <About />
      <Contact />
    </div>
  )
}

export default App
