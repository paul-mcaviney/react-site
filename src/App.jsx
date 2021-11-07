import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx"
import Intro from "./components/intro/Intro.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Works from "./components/works/Works.jsx"
import Testimonials from "./components/testimonials/Testimonials.jsx"
import Contact from "./components/contact/Contact.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
      </div>
    </div>
  );
}

export default App;
