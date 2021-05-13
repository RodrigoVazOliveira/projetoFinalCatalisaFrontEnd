export default class PedidoDeCompraDTO {
    constructor(dataDeVencimento , saldo , dataDePagamento , emailResponsavel , dataLimiteEnvio , formaDePagamento , cnpjOuCpf) {
        this.dataDeVencimento = this.formatarData(dataDeVencimento);
        this.saldo = saldo;
        this.dataDePagamento = this.formatarData(dataDePagamento);
        this.emailResponsavel = emailResponsavel;
        this.dataLimiteEnvio = this.formatarData(dataLimiteEnvio);
        this.formaDePagamento = formaDePagamento;
        this.cnpjOuCpf = cnpjOuCpf; 
    }

    formatarData(data) {
        let ano = data.split('-')[0];
        let mes = data.split('-')[1];
        let dia = data.split('-')[2];

        let dataBr = `${dia}/${mes}/${ano}`;

        return dataBr;
    }
};