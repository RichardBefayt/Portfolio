
import './personal.css';

import personalImg from "../../../assets/images/pages/about/loisirs-img.jpg";

import { CgGames } from "react-icons/cg";
import { MdDirectionsBike, MdHistoryEdu, MdLocalMovies } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";

const Personal = ({ openPersonal, setOpenPersonal }) => {
    return (
        <div className="personal">
            <div className="personal-header">
                <div className="personal-img-container">
                    <img className="personal-img" src={personalImg} alt="" />
                </div>
                <button
                    className="btn btn-light"
                    onClick={() => setOpenPersonal(openPersonal)}
                >
                    X
                </button>
            </div>
            <div className="personal-items">
                <ul className='personal-list'>
                    <li className='personal-item'>
                        <CgGames size={30} style={{color: "#fff", marginRight: "0.6rem" }} />
                        Jeux Vidéo
                    </li>

                    <li className='personal-item'>
                        <MdDirectionsBike size={30} style={{color: "#fff", marginRight: "0.6rem" }} />
                        Moto
                    </li>
                    
                    <li className='personal-item'>
                        <SiYourtraveldottv size={30} style={{color: "#fff", marginRight: "0.6rem" }} />
                        Voyages
                    </li>
                    
                    <li className='personal-item'>
                        <FaUserAstronaut size={30} style={{color: "#fff", marginRight: "0.6rem" }} />
                        Astronomie
                    </li>
                    
                    <li className='personal-item'>
                        <MdHistoryEdu size={30} style={{color: "#fff", marginRight: "0.6rem" }} />
                        Histoire
                    </li>
                    
                    <li className='personal-item'>
                        <MdLocalMovies size={30} style={{color: "#fff", marginRight: "0.6rem" }} />
                        Cinéma
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Personal;