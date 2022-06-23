import Form from './Form';

import './contact.css';

const Contact = () => (
    <div className='contact'>
        <div className='contact-img-container'></div>
        <h1 className='contact-title'>Contact</h1>
        
        <p className='contact-introduction'>Pour tout renseignement ou demande de contact, merci de bien vouloir remplir les champs ci-dessous</p>

        <Form />
    </div>
);

export default Contact;