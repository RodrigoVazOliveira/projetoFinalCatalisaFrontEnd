import axios from "axios";
import PedidoDeCompra from '../models/pedidoDeCompra.dto'

export default class PedidoDeCompraService{

autenticar(dataDeVencimento, saldo, dataDePagamento, emailResponsavel, dataLimiteEnvio, formaDePagamento, cnpjOuCpf) {
let pedidoDeCompraDto = new PedidoDeCompra(dataDeVencimento, saldo, dataDePagamento, emailResponsavel, dataLimiteEnvio, formaDePagamento, cnpjOuCpf)
axios.post('http://localhost:8080/pedido', JSON.stringify(pedidoDeCompraDto), {
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