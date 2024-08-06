import "./informations.css";

const Informations = ({ fullname, adress, tel, mail, isOpen }) => {
    const informationClass = isOpen ? "informations open" : "informations closed";

    return (
        <div className={informationClass}>
            <p>{fullname}</p>
            <p>{adress}</p>
            <p>{tel}</p>
            <p>{mail}</p>
        </div>
    );
};

export default Informations;