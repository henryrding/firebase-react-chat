import './App.css';
import NavBar from './components/NavBar';
import ChatBox from './components/ChatBox';
import Welcome from './components/Welcome';
import React, { useState } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
