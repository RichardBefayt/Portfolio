import './form.css';

const Form = () => (
    <div className='form'>

        <form>
            <label className='form-label' htmlFor='name'>Nom</label>
            <input className='form-input' id='name' type='text'></input>
            
            <label className='form-label'>Email</label>
            <input className='form-input' type='email'></input>
            
            <label className='form-label'>Objet</label>
            <input className='form-input' type='text'></input>
            
            <label className='form-label'>Message</label>
            <textarea className='form-textarea' rows='6' placeholder='Votre Message' />

            <button className='btn'>Envoyer</button>
        </form>
    </div>
);

export default Form;