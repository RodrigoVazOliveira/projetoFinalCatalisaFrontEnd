import axios from "axios";
import Fornecedor from '../models/fornecedor.dto'

export default class FornecedorService{

    autenticar(cpf,cnpj,razaoSocial,logradouro,numero,bairro,cidade,estado,cep,telefone,email,categoriaDeCusto){
        let fornecedorDTO = new Fornecedor(cpf,cnpj,razaoSocial,logradouro,numero,bairro,cidade,estado,cep,telefone,email,categoriaDeCusto)
        axios.post('http://localhost:8080/fornecedor', JSON.stringify(fornecedorDTO), {
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
    
