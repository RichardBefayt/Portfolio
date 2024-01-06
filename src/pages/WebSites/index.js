import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import WebsiteCard from "./WebsiteCard";

import './websites.css';

import { FaAngleDoubleLeft } from "react-icons/fa";

const WebSites = () => {
    const websites = useSelector((state) => state.websites.websitesData);

    return (
        <div className='websites'>
            <h2 className='websites-title'>{websites.title}</h2>

            <div className='websites-container'>
                {
                    websites.composition.map(
                        (website) => <WebsiteCard key={website.id} {...website} />
                    )
                }
            </div>

            <Link to="/">
                <button className='websites-back btn'>
                    <FaAngleDoubleLeft /> Retour
                </button>
            </Link>

        </div>
    );
};

export default WebSites;