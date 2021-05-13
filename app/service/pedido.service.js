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
    };
}