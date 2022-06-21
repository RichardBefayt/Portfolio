
import Informations from "./Informations";
import Formations from "./Formations";
import Personal from "./Personal";

import './about.css';

const About = () => {


    return (
        <div className='about'>
            <div className='about-container'>
                <h1 className='about-title'>Curriculum Vitae</h1>
                
                <div className='tab'>
                    <input type='radio' name='acc' id='acc1' />
                    <label for='acc1'>
                        <h2>Informations</h2>
                    </label>
                    <div className='content'>
                        <Informations />
                    </div>
                </div>

                <div className='tab'>
                    <input type='radio' name='acc' id='acc2' />
                    <label for='acc2'>
                        <h2>Formations</h2>
                    </label>
                    <div className='content'>
                        <Formations />
                    </div>
                </div>
                
                <div className='tab'>
                    <input type='radio' name='acc' id='acc3' />
                    <label for='acc3'>
                        <h2>Loisirs et Passions</h2>
                    </label>
                    <div className='content'>
                        <Personal />
                    </div>
                </div>
            </div>

            
            {/* <div className='about-container'>
                <div className='about-left'>
                    <Informations />
                    <Personal />
                </div>

                <div className='about-right'>
                    <Formations />
                </div>
            </div> */}
        </div>
    );
};
export default About;