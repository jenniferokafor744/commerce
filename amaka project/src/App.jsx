import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home  from "./pages/home";
import Contact  from "./pages/contact";
import About  from "./pages/About";
import NotFound from "./pages/NotFound";
import "./styles/navbar.css";
import "./styles/home.css";
import Heropage from './components/Heropage';
import footer from './components/footer';
import './styles/footer.css';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/" element={<Heropage/>} />
      <Route path="/contact" element={<contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/NotFound" element={<NotFound />} />
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );                        
}

export default App;
