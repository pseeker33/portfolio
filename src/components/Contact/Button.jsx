import { useState } from 'react';

const Button = ({ text, link, icon, onClick, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a 
      href={link}
      onClick={handleClick}
      target="_blank" 
      rel="noopener noreferrer"
      className={`contact-social-btn group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      {icon && (
        <span className={`contact-social-icon ${isHovered ? 'hovered' : ''}`}>
          {icon}
        </span>
      )}      
    </a>
  );
};

export default Button;