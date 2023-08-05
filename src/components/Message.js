import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  const convertTime = (createdAt) => {
    const fireBaseTime = new Date(
      createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
    );
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString();
    return { date, atTime };
  };

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
        <p className="message-time">{convertTime(message.createdAt).atTime}</p>
        <p className="message-time">{convertTime(message.createdAt).date}</p>
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
