import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from "../components/Landing"
import HeaderNav from "../components/HeaderNav"
import Contact from "../components/Contact"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

function Home({ projects }) {

    const notify = () => toast("Message Sent!");
    return (
        <div className="App">
            <ToastContainer />
            <HeaderNav />
            <Landing />
            <div className="mt-[-250px] lg:mt-[-220px] mb-[150px] lg:mb-[100px]">
                <Projects projects={projects} />
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

export default Home
