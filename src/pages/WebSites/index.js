import { useSelector } from "react-redux";
import WebsiteCard from "./WebsiteCard";
import './websites.css';

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

        </div>
    );
};

export default WebSites;