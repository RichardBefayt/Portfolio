import { useSelector } from "react-redux";
import Footer from "../../components/Footer";

import WebsiteCard from "./WebsiteCard";

import './websites.css';

const WebSites = () => {
    const websites = useSelector((state) => state.projects.websitesData);

    return (
        <div className='websites'>
            <h2 className='websites-title'>Sites Web</h2>
            <div className='websites-container'>
                {
                    websites.map(
                        (website) => <WebsiteCard key={website.id} {...website} />
                    )
                }
            </div>

            <Footer />
        </div>

    );
};

export default WebSites; 

