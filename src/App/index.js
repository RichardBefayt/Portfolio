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
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import WebSites from '../pages/WebSites';
import Games from '../pages/Games';


import "./app.css";

const App = () => {
    return (
        <div className="app">
            <Navbar />

            <Routes>
				<Route path='/' element={<Home />} />

				<Route path='/a-propos' element={<About />} />

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

/** Notes V2 :
 * Animations menu déroulant dans About
 * Focus onglet sur page active
 * Bordures qui se colorisent lors d'un survol pour chaque Card des projets
**/ 