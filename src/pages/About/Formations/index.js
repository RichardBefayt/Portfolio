/* eslint-disable jsx-a11y/img-redundant-alt */

// import { useSelector } from "react-redux";

// import FormationsItems from "./FormationsItems";

import './formations.css';

// import formationsImg from "../../../assets/images/pages/about/formations-img.jpeg";

const Formations = ({ school, online, tutos, degree, isOpen }) => {
    const formationClass = isOpen ? "formations open" : "formations closed";

    return (
        <div className={formationClass}>
            <p>{school}</p>
            <p>{online}</p>
            <p>{tutos}</p>
            <p>{degree}</p>
        </div>
    );
};
export default Formations;