import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home  from "./pages/home";
import Contact  from "./pages/Contact";
import About  from "./pages/About";
import NotFound from "./pages/NotFound";
import "./styles/navbar.css";
import "./styles/home.css";
import Heropage from './components/Heropage';
import footer from './components/footer';
import './styles/footer.css';
import './styles/Contact.css';




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Heropage" element={<Heropage/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/NotFound" element={<NotFound />} />
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );                        
}

export default App;
