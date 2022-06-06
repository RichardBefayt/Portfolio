import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import WebsiteCard from "./WebsiteCard";

import WebsitesBg from "../../assets/images/websites-bg.jpg";

import './websites.css';

const WebSites = () => {
    const websites = useSelector((state) => state.projects.websitesData);
    console.log("websites", websites);

    return (
        <div className='websites'>
            <div className='websites-img__container'>
                <img className="websites-img" src={WebsitesBg} alt="Fond d'écran" />
            </div>

            <Link className="websites-link" to="/projets">⬅ Retour</Link>
            
            <h2 className="websites-title">Sites Web</h2>

            <div className='websites-container'>
                {
                    websites.map(
                        (website) => <WebsiteCard key={website.id} {...website} />
                    )
                }
            </div>
        </div>
    );
};

export default WebSites; 