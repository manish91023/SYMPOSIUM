import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import Register from "./Components/Register"
import Navbar from "./Components/Navbar"
import TechnicalEvent from "./Components/TechnicalEvent"
import NontechnicalEvent from "./Components/NontechnicalEvent"
import EventDetail from "./Components/EventDetail"
import Ev from "./Components/Ev"
import Announcement from "./Components/Announcement"
import PageNotFound from "./Components/PageNotFound"
import Contacts from "./Components/Contacts"
import About from "./Components/About"

function App() {
 

  return (
    <div>
    <Router>
      <Navbar/>
      <Announcement/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventid" element={<Ev />} />
        <Route path="/technicalevent" element={<TechnicalEvent />} />
        <Route path="/nontechnicalevent" element={<NontechnicalEvent />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />

        
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
