import PropTypes from "prop-types";

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import useModal from '../../../hooks/useModal';

import Input from '../../../components/Input';

import './form.css';

const Form = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [firme, setFirme] = useState("");
    const [mail, setMail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState(""); 
    const [sendMessage, setSendMessage] = useState("");
    const { isShowing, toggle } = useModal();

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            name,
            firme,
            mail,
            subject,
            message,
        }

        emailjs.send(
            'service_e0a29ta',
            'template_mbdey2t',
            templateParams,
            'TlBEsEGNoSlEv-oLi'
        )
        .then((response) => {
            console.log('SUCCESS! 😃', response.text);
            setSendMessage("Votre message a bien été envoyé");
        })
        .catch((error) => {
            console.error('FAILED... 😠', error);
        });
        
        setName("");
        setFirme("");
        setMail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div className='form'>

            <form ref={form} onSubmit={handleSubmit}>
                <label
                    className='form-label'
                    htmlFor='name'
                >
                    Nom & Prénom
                </label>
                <Input
                    id='name'
                    type='text'
                    value={name}
                    handleChange={setName}
                ></Input>
                
                <label
                    className='form-label'
                    htmlFor='firme'
                >
                    Nom de l'entreprise
                </label>
                <Input
                    id='firme'
                    type='text'
                    value={firme}
                    handleChange={setFirme}
                ></Input>
                
                <label
                    className='form-label'
                >
                    Email
                </label>
                <Input
                    type='email'
                    value={mail}
                    handleChange={setMail}
                ></Input>
                
                <label
                    className='form-label'
                >
                    Sujet
                </label>
                <Input
                    type='text'
                    value={subject}
                    handleChange={setSubject}
                ></Input>
                
                <label
                    className='form-label'
                >
                    Message
                </label>
                <textarea
                    className='form-textarea'
                    rows='6'
                    placeholder='Votre Message'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />

                <button className='btn' type='submit' handleClick={toggle}>Envoyer</button>
                
                {isShowing && 
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal">
                            <div className="modal-header">
                                <p>
                                    {sendMessage}
                                </p>
                                <button
                                    type="button"
                                    className="modal-close-button"
                                    onClick={toggle}
                                >
                                    <span style={{fontSize: "3rem"}}>&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                }

            </form>
        </div>
    );
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

export default Form;