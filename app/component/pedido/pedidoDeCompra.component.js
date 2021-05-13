import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup, Nav, Modal } from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import { MdDateRange, MdAttachMoney } from 'react-icons/md';
import Header from '../header';
import Footer from '../footer';
import PedidoDeCompraService from '../../service/pedido.service';
import PedidoDeCompraDTO from '../../models/pedidoDeCompra.dto';

export default class FormularioPedido extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataDeVencimento: '', 
            saldo: '', 
            dataDePagamento: '', 
            emailResponsavel: '', 
            dataLimiteEnvio: '', 
            formaDePagamento: '', 
            cnpjOuCpf: '', 
            showModalSucesso: false, 
            showModalError: false,
            showModalAcesso: false,
            numeroDePedido: ''
        };
        this.service = new PedidoDeCompraService();
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCloseModalError = this.handleCloseModalError.bind(this);
        this.handlerCloseModalAcesso = this.handlerCloseModalAcesso.bind(this);
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
        const pedidoDeCompra = new PedidoDeCompraDTO(
            this.state.dataDeVencimento,
            this.state.saldo,
            this.state.dataDePagamento,
            this.state.emailResponsavel,
            this.state.dataLimiteEnvio,
            this.state.formaDePagamento,
            this.state.cnpjOuCpf
        );

        const resposta = this.service.cadastrar(pedidoDeCompra);
        resposta.then((response) => {
            if (response.status == 201) {
                this.setState({showModalSucesso: true, numeroDePedido: response.data.numeroDePedido});
            }            
        }).catch((error) => {
            if (error.response.status == 400) {
                this.setState({showModalError: true});
            } else if (error.response.status == 403) {
                this.setState({showModalAcesso: true});
            }
        });
        event.preventDefault();
    }

    handleCloseModal(event) {
        this.setState({
            dataDeVencimento: '', 
            saldo: '', 
            dataDePagamento: '', 
            emailResponsavel: '', 
            dataLimiteEnvio: '', 
            formaDePagamento: '', 
            cnpjOuCpf: '', 
            showModalSucesso: false, 
            showModalError: false,
            showModalAcesso: false
        });
        
    }

    handleCloseModalError(event) {
        this.setState({showModalError: false});
    }

    handlerCloseModalAcesso() {
        this.setState({showModalAcesso: false});
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
            <div>
                <Modal id="modalSucesso" name="modalScuesso" show={this.state.showModalSucesso}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de pedido de compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Cadastro realizado com sucesso!</p>
                        <p>O número do pedido: {this.state.numeroDePedido}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <Modal id="modalError" name="modalError" show={this.state.showModalError}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de pedido de compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Existem erros de dados, favor verificar!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalError}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <Modal id="modalAccessoNegado" name="modalAccessoNegado" show={this.state.showModalAcesso}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de pedido de compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Usuário não tem permissão para cadastrar um pedido de compra.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModalAcesso}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>   
            </Container>
        );
    }
}