import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup, Nav } from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdDateRange, MdAttachMoney } from 'react-icons/md';
import Header from '../header';
import Footer from '../footer';
import PedidoDeCompraService from '../../service/pedido.service';

export default class FormularioPedido extends React.Component {

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
            <Container>
                <Header nomePagina="Cadastro de pedido de compra" />
                <Form onSubmit={this.handlerSubmit} className="mt-4">
                <Row>
                    <Col md="2">Data de vencimento:</Col>
                    <Col md="10">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <MdDateRange />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                             type="date" 
                             onChange={this.handlerChange} 
                             value={this.state.dataDeVencimento} 
                             name="dataDeVencimento" id="dataDeVencimento" 
                             required
                             size="lg"
                             tabIndex="1" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">Data de pagamento:</Col>
                    <Col md="10">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <MdDateRange />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                             type="date" 
                             onChange={this.handlerChange} 
                             value={this.state.dataDePagamento} 
                             name="dataDePagamento" id="dataDePagamento" 
                             required
                             size="lg"
                             tabIndex="2" />
                        </InputGroup>
                    </Col>
                </Row>
                
                <Row>
                    <Col md="2">Saldo:</Col>
                    <Col md="10">

                        <InputGroup>
                        <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <MdAttachMoney />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                            type="number" 
                            onChange={this.handlerChange} 
                            name="saldo" id="saldo" 
                            value={this.state.saldo} 
                            required
                            size="lg"
                            tabIndex="3" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">E-mail do responsável:</Col>
                    <Col md="10">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <AiOutlineMail />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                            type="email" 
                            onChange={this.handlerChange} 
                            name="emailResponsavel" id="emailResponsavel" 
                            value={this.state.emailResponsavel} 
                            required
                            size="lg"
                            tabIndex="4" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">Data limite de envio:</Col>
                    <Col md="10">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <MdDateRange />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                            type="date" 
                            onChange={this.handlerChange} 
                            name="dataLimiteEnvio" id="dataLimiteEnvio" 
                            value={this.state.dataLimiteEnvio} 
                            required
                            size="lg"
                            tabIndex="5" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">CNPJ/CPF:</Col>
                    <Col md="10">
                        <InputGroup>
                            <Form.Control 
                            type="text" 
                            onChange={this.handlerChange} 
                            name="cnpjOuCpf" id="cnpjOuCpf" 
                            value={this.state.cnpjOuCpf} 
                            required
                            size="lg"
                            tabIndex="6" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">
                        <Form.Label>
                            Forma de pagamento:
                        </Form.Label>
                    </Col>
                    <Col md="10">
                        <Form.Control 
                        as="select" tabIndex="7" name="formaDePagamento" onChange={this.handlerChange} value={this.state.formaDePagamento} id="formaDePagamento">
                            <option value="">Escolha ....</option>
                            <option value="BOLETO">Boleto</option>
                            <option value="CARTAO">Cartão</option>
                            <option value="TED_DOC">TED/DOC</option>
                        </Form.Control>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Button 
                        className="mt-2" 
                        variant="primary"
                         name="btnAutenticar" id="btnAutenticar" 
                         size="lg" 
                         block 
                         type="submit"
                         tabIndex="3">Entrar</Button>
                    </Col>
                </Row>
            </Form>

                <Row>
                    <Col>
                        <Nav.Link 
                        as="a"
                        className="btn btn-lg btn-secondary " 
                        href="/home/home"
                        >
                            Voltar
                        </Nav.Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav.Link 
                        as="a"
                        className="btn btn-lg bg-white text-black " 
                        href="/pedido/visualizar"
                        >
                            Visualizar pedidos
                        </Nav.Link>
                    </Col>
                </Row>
            <Footer />    
            </Container>
        );
    }
}