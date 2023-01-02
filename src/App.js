import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home"
import HeaderNav from "./components/HeaderNav"
import Contact from "./components/Contact"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {

  const notify = () => toast("Message Sent!");
  return (
    <div className="App">
      <ToastContainer />
      <HeaderNav />
      <Home />
      <div className="mt-[-250px] lg:mt-[-180px] mb-[150px] lg:mb-[100px]">
        <Projects />
      </div>
      <div style={{ marginTop: "-200px", marginBottom: "180px" }}>
        <About />
        <div style={{ marginTop: "100px", marginBottom: "80px" }}>
          <Skills />
        </div>
        <Contact notify={notify} />
      </div>
      <Footer />

    </div>
  )
}

export default App
