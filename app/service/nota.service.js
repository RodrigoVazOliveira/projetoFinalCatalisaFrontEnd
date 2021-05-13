import axios from 'axios';

export default class NotaFiscalService {

    cadastrarNovaNotaFiscal(notaFiscalDto) {
        let token = localStorage.getItem('JWT_TOKEN');
        return axios.post('http://localhost:8080/notas_fiscais/', JSON.stringify(notaFiscalDto), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
    }
}