import axios from 'axios';

export default class ResponsavelService {
    cadastrarNovoResponsavel(responasvel) {
        axios.post('http://localhost:8080/usuarios/', JSON.stringify(responasvel))
        .then(response => {
            if (response.status == '201') {
                return response.data;
            }
        }).catch(error => {

        });
    }
};