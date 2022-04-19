import * as types from './messagesType'
import * as messageAPI from '../../api/messageAPI'

export const loadMsg = () =>{
    return {type: types.LOAD_MESSAGE}
}

export const loadMsgSuccess = (msg) =>{
    return {type: types.LOAD_MESSAGE_SUCCESS, payload: msg}
}

export const loadMsgError = (err) =>{
    return {type: types.LOAD_MESSAGE_FAIL, payload: err}
}

export const LoadMsg = () =>{
    return dispatch =>{
        // loadMsg
        dispatch(loadMsg)
        messageAPI.getMessages()
        .then( msg => dispatch(loadMsgSuccess) )
        .catch( err => dispatch(loadMsgError) )
    }
}