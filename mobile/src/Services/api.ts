import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.5.150:8080'
});
export default api;