import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Button from "./Button";
import "./Contact.css";

const Contact = () => {
  const { language } = useContext(ThemeContext);
  const [showForm, setShowForm] = useState(false);

  const text = {
    title: {
      en: "Contact",
      es: "Contacto",
    },
    description: {
      en: "I'm open to new opportunities and collaborations. If you have any questions or just want to say hi, feel free to get in touch with me.",
      es: "Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes alguna pregunta o simplemente quieres saludar, no dudes en contactarme.",
    },
    linkedin: { en: "LINKEDIN", es: "LINKEDIN" },
    email: { en: "E-MAIL", es: "CORREO" },
  };

  return (
    <section id="contact" className="contact">
      <h2>{text.title[language]}</h2>
      <p className="contact-description">{text.description[language]}</p>

      <div className="contact-buttons">
        <Button 
          text={text.linkedin[language]} 
          link="https://www.linkedin.com/in/hoover-zavala"
          icon={<FaLinkedin />}
        />
        <Button 
          text={text.email[language]}
          link="#"
          icon={<FaRegEnvelope />}
          onClick={(e) => {
            e.preventDefault(); // Prevenir apertura de nueva pestaña
            setShowForm(true);
          }}
        />
      </div>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={() => setShowForm(false)}>
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
