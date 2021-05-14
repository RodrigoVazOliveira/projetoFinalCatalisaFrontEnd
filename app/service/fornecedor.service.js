import axios from "axios";
import Fornecedor from '../models/fornecedor.dto'

export default class FornecedorService {

    buscarEndereco(cep) {
        return axios.get(`https://viacep.com.br/ws/${cep}/json`);
    }

    cadastrarNovoFornecedor(fornecedorDto) {
        let token = localStorage.getItem('JWT_TOKEN');        
        return axios.post('http://localhost:8080/fornecedores/', JSON.stringify(fornecedorDto), {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        });
    }
};
    
