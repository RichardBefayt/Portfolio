import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import WebsiteCard from "./WebsiteCard";

import backgroundWebsites from "../../assets/images/sites-web.jpg";

import './websites.css';

const WebSites = () => {
    const websites = useSelector((state) => state.projects.websitesData);

    return (
        <div className='websites'>
            <h2 className="websites-title">Sites Web</h2>
            
            <div className='websites-img__container'>
                <img className="websites__img" src={backgroundWebsites} alt="Fond d'écran" />
            </div>

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

WebSites.propTypes = {
	title: PropTypes.string.isRequired,
	introduction: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default WebSites; 