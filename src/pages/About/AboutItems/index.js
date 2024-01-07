import "./about-items.css";

const AboutItems = ({ firstLine, secondLine, thirdLine, fourthLine, isOpen }) => {
    const aboutItemsClass = isOpen ? "about-items open" : "about-items closed";

    return (
        <div className={aboutItemsClass}>
            <p>{firstLine}</p>
            <p>{secondLine}</p>
            <p>{thirdLine}</p>
            <p>{fourthLine}</p>
        </div>
    );
};

export default AboutItems;