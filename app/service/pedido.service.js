import axios from "axios";

export default class PedidoDeCompraService{
    cadastrar(pedidoDeCompraDto) {
        let token = localStorage.getItem('JWT_TOKEN');
        return axios.post('http://localhost:8080/pedidos/', JSON.stringify(pedidoDeCompraDto), {
            headers: {
                'Content-Type':'application/json',
                'Authorization': token
            }
        });
    }

    pedidosPendenteDeEnvio(dataInicial) {
        let dataFormatada = this.formatarData(dataInicial);
        let token = localStorage.getItem('JWT_TOKEN');
        return axios.get(`http://localhost:8080/pedidos/pendentes?dataInicial=${dataFormatada}`, {
            headers: {
                'Authorization' : token
            }
        });
    }

    enviarEmailParaResponsaveis(dataInicial) {
        let dataFormatada = this.formatarData(dataInicial);
        let token = localStorage.getItem('JWT_TOKEN');
        return axios.get(`http://localhost:8080/pedidos/cobrancas?dataInicial=${dataFormatada}`, {
            headers: {
                'Authorization' : token
            }
        });
    }

    formatarData(data) {
        let ano = data.split('-')[0];
        let mes = data.split('-')[1];
        let dia = data.split('-')[2];

        let dataBr = `${dia}/${mes}/${ano}`;

        return dataBr;
    }
}