// import { Link } from "react-router-dom";

import './download-cv.css';
import CV from "../../../assets/pdf/CV_Richard_Befayt.pdf"
import { FaDownload } from "react-icons/fa";

const DownloadCV = () => (
    <div className='download-cv'>
        <a href={CV} target="_blank" rel="noreferrer">
            <button className="btn btn-light">
                CV <FaDownload />
            </button>
        </a>
    </div>
);

export default DownloadCV;