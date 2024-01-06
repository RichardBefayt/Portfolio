import "./informations.css";

const Informations = ({ fullName, street, phone, mail, isOpen }) => {
    const informationClass = isOpen ? "informations open" : "informations";

    return (
        <div className={informationClass}>
            <strong>{fullName}</strong>
            <p>{street}</p>
            <p>{phone}</p>
            <p>{mail}</p>
        </div>
    );
};

export default Informations;