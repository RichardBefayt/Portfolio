import React from 'react';
import { Routes, Route } from "react-router-dom";

// Composants
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import InProgress from '../pages/InProgress';
import NotFound from '../pages/NotFound';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import SkillsCard from '../pages/Skills/SkillsCard';
import Projects from '../pages/Projects';
import WebSites from '../pages/WebSites';
import Games from '../pages/Games';
import Contact from '../pages/Contact';


import "./app.css";

const App = () => {
    return (
        <div className="app">
            <Navbar />

            <Routes>
				<Route path='/' element={<Home />} />

				<Route path='/a-propos' element={<About />} />

				<Route path='/savoir-faire' element={<Skills />} />
				<Route path='/savoir-faire/:slug' element={<SkillsCard />} />

				<Route path='/projets' element={<Projects />} />
				<Route path='/projets/sites-web' element={<WebSites />} />
				<Route path='/projets/jeux' element={<Games />} />


				<Route path='/contact' element={<Contact />} />
                
				<Route path='/en-construction' element={<InProgress />} />

				<Route path='*' element={<NotFound />} />
			</Routes>

            <Footer />
        </div>
    )
}

export default App;