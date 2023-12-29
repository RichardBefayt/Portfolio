/* eslint-disable jsx-a11y/img-redundant-alt */
import { Routes, Route } from "react-router-dom";

// Composants
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import InProgress from '../pages/InProgress';
import NotFound from '../pages/NotFound';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
// import Skills from '../pages/Skills';
// import SkillsPage from '../pages/SkillsPage';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

import "./app.css";

const App = () => {

    return (
        <div className="app">
			<div className="background"></div>
            {/* <Navbar /> */}

            <Routes>
				<Route path='/' element={<Home />} />

				<Route path='/a-propos' element={<About />} />

				{/* <Route path='/snippets' element={<Skills />} /> */}
				{/* <Route path='/snippets/:slug' element={<SkillsPage />} /> */}

				<Route path='/projets' element={<Projects />} />

				<Route path='/contact' element={<Contact />} />
                
				<Route path='/en-construction' element={<InProgress />} />

				<Route path='*' element={<NotFound />} />
			</Routes>

			{/* <Footer /> */}
        </div>
    )
}

export default App;