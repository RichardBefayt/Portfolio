

import { useSelector } from "react-redux";

import WebsiteCard from "./WebsiteCard";

// import backgroundWebsites from "../../assets/images/sites-web.jpg";

import './websites.css';

const WebSites = () => {
    const websites = useSelector((state) => state.projects.websitesData);
    console.log("websites", websites);

    return (
        <div className='websites'>
            {/* <div className='websites-img__container'>
                <img className="websites__img" src={backgroundWebsites} alt="Fond d'écran" />
            </div> */}

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