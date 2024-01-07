import "./about-items.css";

const AboutItems = ({ title, details = [], isOpen }) => {
    const aboutItems = isOpen ? "about-items open" : "about-items closed";

    return (
        <div className={aboutItems}>
            {isOpen &&
                details.map((detail, index) => (
                    <div className="about-items-details" key={index}>
                        <p>{detail.firstLine}</p>
                        <p>{detail.secondLine}</p>
                        <p>{detail.thirdLine}</p>
                        <p>{detail.fourthLine}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default AboutItems;