/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

// Composants
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import InProgress from '../pages/InProgress';
import NotFound from '../pages/NotFound';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import SkillsPage from '../pages/SkillsPage';
import Projects from '../pages/Projects';
import WebSites from '../pages/WebSites';
import Games from '../pages/Games';
import Contact from '../pages/Contact';

import "./app.css";

const App = () => {
	const [classNameBackground, setClassNameBackground] = useState('accueil');
	const location = useLocation();
	// console.log('location:', location);

	useEffect(() => {
		switch (location.pathname) {
			case "/":
			case "/a-propos":
			case "/contact":
				setClassNameBackground('accueil');
				break;

			case "/snippets":
				setClassNameBackground('snippets');
				break;

			case "/projets":
				setClassNameBackground('projets');
				break;

			case "/projets/sites-web":
				setClassNameBackground('sites-web');
				break;

			case "/projets/jeux":
				setClassNameBackground('jeux');
				break;

		
			default:
				break;
		}
	}, [location.pathname]);

    return (
        <div className="app">
			<div className={`background ${classNameBackground}`}></div>
            <Navbar />

            <Routes>
				<Route path='/' element={<Home />} />

				<Route path='/a-propos' element={<About />} />

				<Route path='/snippets' element={<Skills />} />
				<Route path='/snippets/:slug' element={<SkillsPage />} />

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