import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://ciczau-twitter-backend-e83fca20f698.herokuapp.com',
});
