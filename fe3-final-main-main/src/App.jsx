import React, { useState, useEffect } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import DentistDetail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favorites from "./Routes/Favs";
import NotFound from "./Routes/NotFound";

function App() {
  const [title] = useState('🚀🐼🦷 Rocket Panda Dentistry 🦝🐼🦷');

  useEffect(() => {
    document.title = title;
  }, [title]);  
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dentist/:id" element={<DentistDetail/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/favs" element={<Favorites/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
