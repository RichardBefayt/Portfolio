import './modal.css';

const Modal = ({ closeModal }) => (
    <div className='modal'>
        <div className='modal-bg'>
            <div className='modal-container'>
                <button
                    className="btn btn-light"
                    onClick={() => closeModal(false)}
                >
                    X
                </button>
                
                <div className='modal-header'>
                    <h2>Merci !</h2>
                </div>
                
                <div className='modal-body'>
                    <p>Votre message a bien été envoyé. Je tâcherai de vous répondre dans les plus brefs délais.</p>
                    <p>À bientôt !</p>
                </div>
                
                <div className='modal-footer'>
                    <button
                        className="btn"
                        onClick={() => closeModal(false)}  
                    >
                        Fermer
                    </button>
                </div>

            </div>
        </div>
    </div>
);

export default Modal;