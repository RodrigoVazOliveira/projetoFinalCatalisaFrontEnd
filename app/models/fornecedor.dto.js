export default class Fornecedor{

    constructor(cpf,cnpj,razaoSocial,logradouro,numero,bairro,cidade,estado,cep,telefone,email,categoriaDeCusto) {
        if (cpf == '') {
            this.cpf = null;
            this.cnpj = cnpj;
        }

        if (cnpj == '') {
            this.cnpj = null;
            this.cpf  = cpf;
        }

        this.razaoSocial = razaoSocial;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.telefone = telefone;
        this.email = email;
        this.categoriaDeCusto = categoriaDeCusto;
    }
    
};