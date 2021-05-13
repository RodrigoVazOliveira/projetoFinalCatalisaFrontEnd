import axios from 'axios';

export default class NotaFiscalService {

    constructor() {
        this.token = localStorage.getItem('JWT_TOKEN');
    }

    cadastrarNovaNotaFiscal(notaFiscalDto) {
        return axios.post('http://localhost:8080/notas_fiscais/', JSON.stringify(notaFiscalDto), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.token
            }
        });
    }
}