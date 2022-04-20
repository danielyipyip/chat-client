import { SET_USER, SET_ROOM, SET_SOCKET } from "./demoType";

const initialState = {
    user: '', 
    room: '', 
    socket: {}, 
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.payload}
        case SET_ROOM: 
            return {...state, room: action.payload}
        case SET_SOCKET:
            return {...state, socket: action.payload}
        default:
            return state
    }
}

export default reducer