
import './personal.css';

import { CgGames } from "react-icons/cg";
import { MdDirectionsBike, MdHistoryEdu } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";

const Personal = () => {
    return (
        <div className="personal">
            <h2 className="personal-title">Loisirs et Passions</h2>
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
            </ul>
        </div>
    );
};

export default Personal;