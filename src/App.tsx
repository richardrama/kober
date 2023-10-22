import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"


const App = () => {
  return (
    <div className='font-poppins text-blue overflow-x-hidden'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App