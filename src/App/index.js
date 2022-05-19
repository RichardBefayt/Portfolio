import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

// Composants
import InProgress from '../components/InProgress';
import Footer from '../components/Footer';

import "./app.css";

const App = () => {
    return (
        <div className="app">

            <Routes>
				<Route path='/' element={<Home />} />
				<Route path='/a-propos' element={<About />} />
				<Route path='/projets' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
                
				<Route path='/en-construction' element={<InProgress />} />
			</Routes>
            <Footer />
        </div>
    )
}

export default App;