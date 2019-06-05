import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
});

export default Instance;