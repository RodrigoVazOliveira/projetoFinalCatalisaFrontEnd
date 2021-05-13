import axios from 'axios';

export default class ResponsavelService {
    cadastrarNovoResponsavel(responasvel) {
        const tokenLogin = localStorage.getItem('JWT_TOKEN');
        return axios.post('http://localhost:8080/responsaveis/', JSON.stringify(responasvel), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': tokenLogin
            }
        });
    }
};