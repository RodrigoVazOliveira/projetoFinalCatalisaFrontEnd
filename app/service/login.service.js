import axios from 'axios';
import Login from '../models/login.dto';

export default class LoginService {

    autenticar(email, senha) {
        let logindto = new Login(email, senha);

        axios.post('http://localhost:8080/login', JSON.stringify(logindto), {
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, DELETE, OPTIONS, GET'
            }
        }).then(
            res => {
                console.log(res.headers);
            }
        ).catch(function(error) {
            console.log(error);
        });
    }

};