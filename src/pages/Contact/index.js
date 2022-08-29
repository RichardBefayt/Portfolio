import Form from './Form';

import './contact.css';
import Footer from '../../components/Footer';

const Contact = () => (
    <div className='contact'>
        <h1 className='contact-title'>Contact</h1>
        <p className='contact-introduction'>Pour tout renseignement ou demande de contact, merci de bien vouloir remplir les champs ci-dessous</p>

        <Form />
        <Footer />
    </div>
);

export default Contact;