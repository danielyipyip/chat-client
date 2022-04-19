import * as messagesType from './messagesType'

const initialState = {
    loading: false, 
    messages: [], 
    error: ''
}

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case messagesType.LOAD_MESSAGE:
            return {...state, loading: true}
        case messagesType.LOAD_MESSAGE_SUCCESS:
            return {...state, loading: false, messages: action.payload}
        case messagesType.LOAD_MESSAGE_FAIL:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export default reducer;