import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  return (
    <div className={`chat-bubble ${message.uid === user.uid ? 'right' : ''}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    createdAt: PropTypes.object,
    uid: PropTypes.string,
  }),
};

export default Message;
