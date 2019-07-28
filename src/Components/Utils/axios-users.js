import axios from 'axios';

const heroku = "https://big-looser-server-node.herokuapp.com/";
const localhost = "http://localhost:4000/";

const Instance = axios.create({
    baseURL: heroku,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'X-Requested-With': '*',
      }
});

export default Instance;