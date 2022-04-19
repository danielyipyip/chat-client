import { SET_USER, SET_ROOM } from "./demoType";

export const setUser = (user) =>{
    return {type: SET_USER, payload: user}
}

export const setRoom = (room) =>{
    return {type: SET_ROOM, payload: room}
}