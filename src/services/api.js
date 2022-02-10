// http://economia.awesomeapi.com.br/json/all/USD-BRL
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://economia.awesomeapi.com.br/json/'
})

export default api;