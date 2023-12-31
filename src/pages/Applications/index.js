import { useSelector } from "react-redux";
import ApplicationCard from "./ApplicationCard";
import './applications.css';

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
            
        </div>
    );
};

export default Applications;