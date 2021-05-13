import React from "react";
import { Form, Button, Container, Row, Col, InputGroup, Nav, Modal } from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import { MdDateRange, MdAttachMoney } from 'react-icons/md';
import Header from '../header';
import Footer from '../footer';

export default class FormularioNotaFiscal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numeroDaNota: '',
            cnpjOuCpfFornecedor: '',
            valorAPagar: '',
            dataDeEmissao: '',
            pedidoDeCompras: '',
            dataDeEnvio: '',
            emailDoResponsavel: '',
            showModalSucesso: false, 
            showModalError: false,
            showModalAcesso: false
        };

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
    
    handleCloseModal(event) {
        this.setState({
            numeroDaNota: '',
            cnpjOuCpfFornecedor: '',
            valorAPagar: '',
            dataDeEmissao: '',
            pedidoDeCompras: '',
            dataDeEnvio: '',
            emailDoResponsavel: '',
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

    handlerSubmit(event) {
    }

    render() {
        return (
            <Container>
                <Header nomePagina="Cadastro de nota fiscal" />
                <Form onSubmit={this.handlerSubmit} className="mt-4">
                <Row>
                    <Col md="2">Número de nota:</Col>
                    <Col md="10">
                        <InputGroup>
                            <Form.Control 
                             type="date" 
                             onChange={this.handlerChange} 
                             value={this.state.numeroDaNota} 
                             name="numeroDaNota" id="numeroDaNota" 
                             required
                             size="lg"
                             tabIndex="1" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">CNPJ/CPF fornecedor:</Col>
                    <Col md="10">
                        <InputGroup>
                            <Form.Control 
                             type="text" 
                             onChange={this.handlerChange} 
                             value={this.state.cnpjOuCpfFornecedor} 
                             name="cnpjOuCpfFornecedor" id="cnpjOuCpfFornecedor" 
                             required
                             size="lg"
                             tabIndex="2" />
                        </InputGroup>
                    </Col>
                </Row>
                
                <Row>
                    <Col md="2">Valor a pagar:</Col>
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
                            name="valorAPagar" id="valorAPagar" 
                            value={this.state.valorAPagar} 
                            required
                            size="lg"
                            tabIndex="3" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">Data de emissão:</Col>
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
                            name="dataDeEmissao" id="dataDeEmissao" 
                            value={this.state.dataDeEmissao} 
                            required
                            size="lg"
                            tabIndex="4" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">Data de envio:</Col>
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
                            name="dataDeEnvio" id="dataDeEnvio" 
                            value={this.state.dataDeEnvio} 
                            required
                            size="lg"
                            tabIndex="5" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">Pedido de compra:</Col>
                    <Col md="10">
                        <InputGroup>
                            <Form.Control 
                            type="text" 
                            onChange={this.handlerChange} 
                            name="pedidoDeCompras" id="pedidoDeCompras" 
                            value={this.state.pedidoDeCompras}
                            required
                            size="lg"
                            tabIndex="6" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">E-mail do responsável:</Col>
                    <Col md="10">
                        <InputGroup>
                            <Form.Control 
                            type="text" 
                            onChange={this.handlerChange} 
                            name="emailDoResponsavel" id="emailDoResponsavel" 
                            value={this.state.emailDoResponsavel}
                            required
                            size="lg"
                            tabIndex="6" />
                        </InputGroup>
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
            <Footer /> 
            <div>
                <Modal id="modalSucesso" name="modalScuesso" show={this.state.showModalSucesso}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de nota fiscal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Cadastro realizado com sucesso!
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
                    <Modal.Title>Cadastro de nota fiscal</Modal.Title>
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
                    <Modal.Title>Cadastro de nota fiscal</Modal.Title>
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