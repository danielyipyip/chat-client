import Reactm, {useEffect} from 'react'
import Message from './Message'
import {useSelector, useDispatch} from 'react-redux'
import {LoadMsg} from './redux/index'

function Messages() {

  const otherMsg = useSelector(state => state.messages.messages)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(LoadMsg())
    console.log(otherMsg)
  }, [])

  return (
    <div>
        Messages
        <Message />
        other msg: {otherMsg}
    </div>
  )
}

export default Messages