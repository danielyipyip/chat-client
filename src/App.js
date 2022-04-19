import React, {useEffect, useRef, useState} from "react";
import ChatArea from "./components/ChatArea";

import io from 'socket.io-client';
import {useSelector, useDispatch} from 'react-redux'
import {LoadMsg} from './components/redux/index'

function App() {
  let socket;
  const ENDPOINT = 'http://localhost:5000/';
  useEffect(()=>{
    socket= io(ENDPOINT);
    socketRef.current=socket;
  }, [])


  const socketRef = useRef();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  useEffect(()=>{
    socket.on('messageFromServer', msg=>{
      console.log(`received ${msg}`)
      setMessages(prev => [...prev, msg])
    })
  },[socket])

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    // console.log(evt.target[0].value);
    if (text){
      socketRef.current.emit('message', evt.target[0].value)
    }
    
  }
  return (
    <div className="App">
        App
        <ChatArea/>
        <form onSubmit={evt=>handleSubmit(evt)}>
            <input type='text' value={text} onChange={evt=>setText(evt.target.value)}></input>
            <button type='submit'>Submit</button>
        </form>
        <div>
          {messages.map(msg=>{
            return <p>{msg}</p>
          })}
        </div>
    </div>
  );
}

export default App;
