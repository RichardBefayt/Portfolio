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
        <div className='form'>

            <form
                ref={form}
                onSubmit={handleSubmit}
            >
                <label
                    className='form-label'
                    htmlFor='name'
                >
                    Prénom & NOM
                </label>
                <Input
                    id='name'
                    type='text'
                    value={name}
                    handleChange={setName}
                />
                
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
                />
                
                <label
                    className='form-label'
                >
                    Email
                </label>
                <Input
                    type='email'
                    value={mail}
                    handleChange={setMail}
                />
                
                <label
                    className='form-label'
                >
                    Sujet
                </label>
                <Input
                    type='text'
                    value={subject}
                    handleChange={setSubject}
                />
                
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

            </form>
        </div>
    );
};

export default Form;