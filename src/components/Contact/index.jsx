import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  const { language } = useContext(ThemeContext);
  const [showForm, setShowForm] = useState(false);

  const text = {
    title: {
      en: 'Contact',
      es: 'Contacto'
    },
    description: {
      en: "I'm open to new opportunities and collaborations. If you have any questions or just want to say hi, feel free to get in touch with me.",
      es: "Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes alguna pregunta o simplemente quieres saludar, no dudes en contactarme."
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>{text.title[language]}</h2>
      <p className="contact-description">{text.description[language]}</p>
      
      <div className="contact-buttons">
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-button linkedin"
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
          LinkedIn
        </a>
        
        <button 
          className="contact-button email"
          onClick={() => setShowForm(true)}
        >
          <img src="/icons/email.svg" alt="Email" />
          Email
        </button>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <button 
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
            <ContactForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;