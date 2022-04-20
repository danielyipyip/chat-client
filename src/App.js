import React, {useEffect, useRef, useState} from "react";
import ChatArea from "./components/ChatArea";

import io from 'socket.io-client';
import {useSelector, useDispatch} from 'react-redux'
import {LoadMsg, setRoom, setUser} from './components/redux/index'

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
  // useEffect(()=>{
  //   socket.on('messageFromServer', msg=>{
  //     console.log(`received ${msg}`)
  //     setMessages(prev => [...prev, msg])
  //   })
  // },[socket])

  useEffect(()=>{
    socket.on('chatMessage', msg=>{
      setMessages(prev => [...prev, msg])
    })
  }, [socket])

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    // console.log(evt.target[0].value);
    if (text){
      socketRef.current.emit('chatMessage', evt.target[0].value, room)
    }
    
  }

  const dispatch = useDispatch();
  const user = useSelector(state => state.demographic.user)
  const handleSetUser = (evt) =>{
    evt.preventDefault();
    dispatch(setUser(evt.target[0].value));
  }
  const room = useSelector(state => state.demographic.room)
  const handleSetRoom = (evt) =>{
    evt.preventDefault();
    dispatch(setRoom(evt.target[0].value));
    console.log(evt.target[0].value)
    socketRef.current.emit('joinroom', user, evt.target[0].value)
  }
  return (
    <div className="App">
        App
        <ChatArea/>
        <p>User: {user}</p>
        <form onSubmit={evt=>handleSetUser(evt)}>
            <input type='text'></input>
            <button type='submit'>setUser</button>
        </form>
        <form onSubmit={evt=>handleSetRoom(evt)}>
            <input type='text'></input>
            <button type='submit'>setChatRoom</button>
        </form>
        <form onSubmit={evt=>handleSubmit(evt)}>
            <input type='text' value={text} onChange={evt=>setText(evt.target.value)}></input>
            <button type='submit'>Submit</button>
        </form>
        <p>room: {room}</p>
        <div>
          {messages.map(msg=>{
            return <p>{msg}</p>
          })}
        </div>
    </div>
  );
}

export default App;
