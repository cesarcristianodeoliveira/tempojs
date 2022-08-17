import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?format=json-cors&key=c2c81fea&user_ip=remote',
    // baseURL: 'https://api.hgbrasil.com/weather?format=json-cors&user_ip=remote',
});

export default api;