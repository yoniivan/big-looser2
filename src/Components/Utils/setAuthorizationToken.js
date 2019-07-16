import axios from 'axios';

export default function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}

export function logOut(){
    localStorage.removeItem('expireToken');
    localStorage.removeItem('token');
}

export function checkExpireToken(){
    const expDate = new Date(localStorage.getItem('expireToken'));
    if(expDate < new Date()){
        delete axios.defaults.headers.common['Authorization'];
        return true;
    }else{
        return false;
    }
    
}