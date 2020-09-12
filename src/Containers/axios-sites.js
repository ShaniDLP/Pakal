import axios from 'axios';

const instance = axios.create({ 
baseURL: 'https://pakal-4a6e5.firebaseio.com/'
});

export default instance; 