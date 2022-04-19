import axios from 'axios';

const baseURL = 'http://localhost:5000/chat/'

export const getMessages = async() =>{
    return await axios.get(baseURL);
}