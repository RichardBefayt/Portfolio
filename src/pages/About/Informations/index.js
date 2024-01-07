import "./informations.css";

const Informations = ({ firstLine, secondLine, thirdLine, fourthLine, isOpen }) => {
    const informationClass = isOpen ? "informations open" : "informations closed";

    return (
        <div className={informationClass}>
            <p>{firstLine}</p>
            <p>{secondLine}</p>
            <p>{thirdLine}</p>
            <p>{fourthLine}</p>
        </div>
    );
};

export default Informations;