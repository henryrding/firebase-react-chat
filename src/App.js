import './App.css';
import NavBar from './components/NavBar';
import ChatBox from './components/ChatBox';
import Welcome from './components/Welcome';
import React from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user] = useAuthState(auth);

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
