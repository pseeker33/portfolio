import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ContactForm = ({ onClose }) => {
  const { language } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Here you would typically make an API call to your email service
      // For now, we'll simulate sending with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      setTimeout(() => {
        setStatus('');
        onClose();
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const labels = {
    name: { en: 'Name', es: 'Nombre' },
    email: { en: 'Email', es: 'Correo' },
    message: { en: 'Message', es: 'Mensaje' },
    send: { en: 'Send Message', es: 'Enviar Mensaje' },
    sending: { en: 'Sending...', es: 'Enviando...' },
    success: { en: 'Message Sent!', es: '¡Mensaje Enviado!' },
    error: { en: 'Error sending message', es: 'Error al enviar mensaje' }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">{labels.name[language]}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">{labels.email[language]}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">{labels.message[language]}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />
      </div>
      <button 
        type="submit" 
        className={`submit-button ${status}`}
        disabled={status === 'sending'}
      >
        {status ? labels[status][language] : labels.send[language]}
      </button>
    </form>
  );
};

export default ContactForm;