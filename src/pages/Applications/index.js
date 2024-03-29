import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ApplicationCard from "./ApplicationCard";
import './applications.css';
import { FaAngleDoubleLeft } from "react-icons/fa";

const Applications = () => {
    const applications = useSelector((state) => state.applications.applicationsData);

    return (
        <div className='applications'>
            <h2 className="applications-title">{applications.title}</h2>
            
            <div className='applications-container'>
                {applications.composition.map((application) => (
                    <ApplicationCard key={application.id} {...application} />
                ))}
            </div>

            <Link to="/">
                <button className='applications-back btn'>
                    <FaAngleDoubleLeft /> Retour
                </button>
            </Link>
            
        </div>
    );
};

export default Applications;