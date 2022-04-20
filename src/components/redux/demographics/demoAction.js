import { SET_USER, SET_ROOM, SET_SOCKET } from "./demoType";

export const setUser = (user) =>{
    return {type: SET_USER, payload: user}
}

export const setRoom = (room) =>{
    return {type: SET_ROOM, payload: room}
}

export const setsocket = (socket) =>{
    return {type: SET_SOCKET, payload: socket}
}