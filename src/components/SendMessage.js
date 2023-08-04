import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

SendMessage.propTypes = {
  scroll: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export default SendMessage;
