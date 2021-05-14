import axios from "axios";
import Fornecedor from '../models/fornecedor.dto'

export default class FornecedorService {

    buscarEndereco(cep) {
        return axios.get(`https://viacep.com.br/ws/${cep}/json`);
    }
};
    
