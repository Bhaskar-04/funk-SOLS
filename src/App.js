import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Footer from "./components/Footer"

import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/contact.scss"
import "./styles/mediaquerry.scss"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
