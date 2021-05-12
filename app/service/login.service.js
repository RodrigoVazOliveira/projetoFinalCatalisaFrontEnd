import axios from 'axios';
import Login from '../models/login.dto';
import Router from 'next/router';

export default class LoginService {

    autenticar(email, senha) {
        let logindto = new Login(email, senha);

        axios.post('http://localhost:8080/login', JSON.stringify(logindto), {
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        }).then(function(response) {
            if (response.headers.authorization) {
                localStorage.setItem('JWT_TOKEN', response.headers.authorization);
                Router.push('/home/home');
            } else {
                return false;
            }
        }).catch(function(error) {
            console.log(error);
            return false;
        });
    }

};