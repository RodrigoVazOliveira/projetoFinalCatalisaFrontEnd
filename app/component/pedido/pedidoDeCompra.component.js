import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import PedidoDeCompraService from '../../service/pedido.service';

Class FormularioPedido extends React.Component{
                  constructor(props) {
                      super(props);
                        this.state = {dataDeVencimento: '', saldo: '', dataDePagamento: '', emailResponsavel: '', dataLimiteEnvio: '', formaDePagamento: '', cnpjOuCpf: ''};
                        this.service = new PedidoDeCompraService();
                                    this.handlerChange = this.handlerChange.bind(this);
                                    this.handlerSubmit = this.handlerSubmit.bind(this);
}

handlerChange(event) {
        const target = event.target;
        const value  = target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    handlerSubmit(event) {
            this.service.autenticar(this.state.dataDeVencimento + '' + this.state.saldo + ' ' + this.state.dataDePagamento + '' + this.state.emailResponsavel + '' + this.state.dataLimiteEnvio
             + '' + this.state.formaDePagamento + '' + this.state.cnpjOuCpf);
            event.preventDefault();
        }

        render() {
                        return (
                            <Container className="mt-4">
                            <Form onSubmit={this.handlerSubmit}>
                                <fieldset className="fieldset">
                                    <legend className="text-center">Pedido de Compra</legend>

                            <Row>
                                       <Col md="2">Data:</Col>
                                         <Col md="10">
                                         <InputGroup>
                                         <InputGroup.Prepend>
                                         <InputGroup.Text>
                                         <AiOutlineMail />
                                         </InputGroup.Text>
                                         </InputGroup.Prepend>
                                         <Form.Control type="data" onChange={this.handlerChange} value={this.state.dataDeVencimento} name="data" id="dataDeVencimento" placeholder="Informe a data de vencimento..." required />
                                         </InputGroup>
                                       </Col>
                            </Row>

                            <Row>
                                           <Col md="2">Saldo</Col>
                                           <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                 <InputGroup.Text>
                                                 <AiOutlineMail />
                                                 </InputGroup.Text>
                                                 </InputGroup.Prepend>
                                                 <Form.Control type="saldo" onChange={this.handlerChange} value={this.state.saldo} name="saldo" id="saldo" placeholder="Informe o saldo..." required />
                                                 </InputGroup>
                                           </Col>
                            </Row>

                            <Row>
                                   <Col md="2">Data Pagamento</Col>
                                   <Col md="10">
                                                 <InputGroup>
                                                 <InputGroup.Prepend>
                                                 <InputGroup.Text>
                                                 <AiOutlineMail />
                                                 </InputGroup.Text>
                                                 </InputGroup.Prepend>
                                                 <Form.Control type="dataPagamento" onChange={this.handlerChange} value={this.state.dataDePagamento} name="dataPagamento" id="dataPagamento" placeholder="Informe a data do pagamento..." required />
                                                 </InputGroup>
                                   </Col>
                            </Row>


                            <Row>
                                    <Col md="2">E-mail Responsavel</Col>
                                    <Col md="10">
                                             <InputGroup>
                                             <InputGroup.Prepend>
                                             <InputGroup.Text>
                                             <AiOutlineMail />
                                             </InputGroup.Text>
                                             </InputGroup.Prepend>
                                             <Form.Control type="responsavel" onChange={this.handlerChange} value={this.state.emailResponsavel} name="responsavel" id="responsavel" placeholder="Informe qual o e-mail..." required />
                                             </InputGroup>
                                    </Col>
                            </Row>

                            <Row>
                                  <Col md="2">Data Envio</Col>
                                  <Col md="10">
                                               <InputGroup>
                                               <InputGroup.Prepend>
                                               <InputGroup.Text>
                                               <AiOutlineMail />
                                               </InputGroup.Text>
                                               </InputGroup.Prepend>
                                               <Form.Control type="data de envio" onChange={this.handlerChange} value={this.state.dataLimiteEnvio} name="dataEnvio" id="dataEnvio" placeholder="Informe a data limite para envio..." required />
                                               </InputGroup>
                                  </Col>
                            </Row>

                            <Row>
                                   <Col md="2">formaPagamento</Col>
                                   <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="formaPagamento" onChange={this.handlerChange} value={this.state.formaDePagamento} name="formaPagamento" id="formaPagamento" placeholder="Informe o formato de pagamento..." required />
                                                </InputGroup>
                                   </Col>
                            </Row>

                            <Row>
                                   <Col md="2">cnpjOuCpf</Col>
                                   <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="cnpjOuCpf" onChange={this.handlerChange} value={this.state.cnpjOuCpf} name="cnpjOuCpf" id="cnpjOuCpf" placeholder="Informe o CNPJ ou o CPF..." required />
                                                </InputGroup>
                                   </Col>
                            </Row>

                            </fieldset>
                                                    <Row>
                                                        <Col>
                                                            <Button className="mt-2" variant="primary" name="btnAutenticar" id="btnAutenticar" size="lg" block type="submit">Enviar</Button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                </Container>
                                            );
                                        }
                                    }

                                export default FormularioPedido;