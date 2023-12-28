/* eslint-disable no-restricted-globals */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Input from '../../../components/Input';
import Modal from '../../../components/Modal';

import './form.css';

const Form = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [firme, setFirme] = useState("");
    const [mail, setMail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState(""); 

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

    // Modal
    const [openModal, setOpenModal] = useState(false);

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
        >
            <div className="form-left">
                <div className="form-name">
                    <label
                        className='form-label'
                        htmlFor='name'
                    >
                    </label>
                    <Input
                        id='name'
                        type='text'
                        value={name}
                        handleChange={setName}
                        placeholder='Prénom & Nom'
                    />
                </div>
                <div className="form-firme">
                    <label
                        className='form-label'
                        htmlFor='firme'
                    >
                    </label>
                    <Input
                        id='firme'
                        type='text'
                        value={firme}
                        handleChange={setFirme}
                        placeholder="Nom de l'entreprise"
                    />
                </div>
            </div>

            <div className="form-right">
                <div className="form-email">
                    <label
                        className='form-label'
                    >
                    </label>
                    <Input
                        type='email'
                        value={mail}
                        handleChange={setMail}
                        placeholder='Email'
                    />
                </div>
                <div className="form-message">
                    <label
                        className='form-label'
                    >
                    </label>
                    <Input
                        type='text'
                        value={subject}
                        handleChange={setSubject}
                        placeholder='Sujet'
                    />
                </div>
            </div>
            
            <div className="form-bottom">
                <div className="form-textarea-container">
                    <label
                        className='form-label'
                    >
                    </label>
                    <textarea
                        className='form-textarea'
                        rows='6'
                        placeholder='Votre Message'
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </div>
                <div className="form-button">
                    <button
                        className='btn-submit'
                        type='submit'
                        onClick={() => {
                            setOpenModal(true);
                        }}
                        >
                        Envoyer
                    </button>
                    {openModal && <Modal closeModal={setOpenModal} />}
                </div>
            </div>
        </form>
    );
};

export default Form;