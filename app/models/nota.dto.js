export default class CadastrarNotaFiscalDTO {
    constructor( numeroDaNota, cnpjOuCpfFornecedor, valorAPagar, dataDeEmissao, pedidoDeCompras, dataDeEnvio, emailDoRespnsavel) {
        this.numeroDaNota = numeroDaNota;
        this.cnpjOuCpfFornecedor = cnpjOuCpfFornecedor;
        this.valorAPagar = valorAPagar;
        this.dataDeEmissao = this.formatarData(dataDeEmissao);
        this.pedidoDeCompras = [pedidoDeCompras];
        this.dataDeEnvio = this.formatarData(dataDeEnvio);
        this.emailDoRespnsavel = emailDoRespnsavel;
    }

    formatarData(data) {
        let ano = data.split('-')[0];
        let mes = data.split('-')[1];
        let dia = data.split('-')[2];

        let dataBr = `${dia}/${mes}/${ano}`;

        return dataBr;
    }
}