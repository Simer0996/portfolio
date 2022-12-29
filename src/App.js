import Home from "./components/Home"
import HeaderNav from "./components/HeaderNav"
import Contact from "./components/Contact"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Home />
      <div style={{ marginTop: "60px", marginBottom: "180px" }}>
        <Projects />
      </div>
      <div style={{ marginTop: "-200px", marginBottom: "180px" }}>
        <About />
        <div style={{ marginTop: "100px", marginBottom: "80px" }}>
          <Skills />
        </div>
        <Contact />
      </div>
      <Footer />

    </div>
  )
}

export default App
