
import Informations from "./Informations";
import Formations from "./Formations";
import Personal from "./Personal";

import './about.css';

const About = () => {


    return (
        <div className='about'>
            <h1 className='about-title'>Curriculum Vitae</h1>
            
            <div className='about-container'>
                <div className='about-left'>
                    <Informations />
                    <Personal />
                </div>

                <div className='about-right'>
                    <Formations />
                </div>
            </div>
        </div>
    );
};
export default About;