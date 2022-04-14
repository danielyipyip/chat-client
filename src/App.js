import React from "react";
import ChatArea from "./components/ChatArea";

import io from 'socket.io-client';
import {useEffect} from 'react'



function App() {
  let socket;
  const ENDPOINT = 'http://localhost:5000/';
  useEffect(()=>{
    socket= io(ENDPOINT);
  }, [])
  return (
    <div className="App">
        App
        <ChatArea />
    </div>
  );
}

export default App;
