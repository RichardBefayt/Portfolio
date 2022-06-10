import './modal.css';

const Modal = ({ closeModal }) => (
    <div className='modal'>
        <div className='modal-container'>
            <div className='modal-header'>
                <h2>Merci !</h2>
            </div>
            
            <div className='modal-body'>
                <p className='modal-text'>Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.</p>
                <p className='modal-text'>À bientôt !</p>
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
);

export default Modal;