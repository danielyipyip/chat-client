import { SET_USER, SET_ROOM } from "./demoType";

const initialState = {
    user: '', 
    room: ''
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.payload}
        case SET_ROOM: 
            return {...state, room: action.payload}
        default:
            return state
    }
}

export default reducer