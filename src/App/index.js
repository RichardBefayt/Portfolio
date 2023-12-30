/* eslint-disable jsx-a11y/img-redundant-alt */
import { Routes, Route, useLocation } from "react-router-dom";

// Composants
import Navbar from "../components/Navbar"; // Importez la Navbar ici
import Footer from "../components/Footer";

import InProgress from '../pages/InProgress';
import NotFound from '../pages/NotFound';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Applications from '../pages/Applications';
import Websites from '../pages/WebSites';
import Games from '../pages/Games';
import Contact from '../pages/Contact';

import "./app.css";

const App = () => {
    const location = useLocation();

    // Fonction pour vérifier si la page est la page Home
    const isHome = location.pathname === '/';

    return (
        <div className="app">
            <div className="background"></div>

            {/* Afficher la Navbar pour toutes les pages sauf la page Home */}
            {!isHome && <Navbar />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />

                <Route path='/websites' element={<Websites />} />

                <Route path='/applications' element={<Applications />} />

                <Route path='/games' element={<Games />} />

                <Route path='/contact' element={<Contact />} />

                <Route path='/in-progress' element={<InProgress />} />

                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App;