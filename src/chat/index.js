
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Chatbot.css'; // Import CSS for styling
import ChatIcon from '../component/icon/chatIcon';
import CloseIcon from '../component/icon/closeIcon';

const Chatbot = ({ greetingMessage, position='bottom-left' }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleChatbot = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`chatbot ${position} ${expanded ? 'expanded' : ''}`}>
      {expanded && (
        <div className="chatbot-box">
          <div className="chatbot-greeting">
            <p>{greetingMessage}</p></div>
        </div>
      )}
     
        <div className="chatbot-icon" onClick={toggleChatbot}>
           {expanded ? <CloseIcon/> :<ChatIcon/>} 
            
        </div>
    

    </div>
  );
};

Chatbot.propTypes = {
  greetingMessage: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default Chatbot;

