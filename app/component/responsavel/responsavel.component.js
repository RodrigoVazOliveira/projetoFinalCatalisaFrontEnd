import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Container, Form, Row, Col, InputGroup, Button, Modal, Nav } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import  ResponsavelDTO  from '../../models/responsavel.dto';
import  ResponsavelService  from '../../service/responsavel.service';

export default class FormularioResponsavel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nomeCompleto: '', email: '', nomeDoProjeto: '', modalHide: false,showModalSucesso: false, showModalError: false, showModalAcesso: false};
        this.service = new ResponsavelService();

        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCloseModalError = this.handleCloseModalError.bind(this);
        this.handleCloseModalAcesso = this.handleCloseModalAcesso.bind(this);
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
        const responsavel = new ResponsavelDTO(this.state.nomeCompleto, this.state.email, this.state.nomeDoProjeto);
        const resposta    = this.service.cadastrarNovoResponsavel(responsavel);
        event.preventDefault();

        resposta.then((response) => {
            if (response.status == 201) {
                // responsável cadastro com sucesso
                this.setState({showModalSucesso: true, nomeCompleto: '', email: '', nomeDoProjeto: ''});
            }
        }).catch((error) => {
            if (error.response.status == 403) {
                // acesso negado - usuário não está logado ou não tem permissão
                this.setState({showModalAcesso: true});
            } else if (error.response.status == 400) {
                // erro de dados
                this.setState({showModalError: true});
            }
        });

    }

    
    handleCloseModal(event) {
        this.setState({showModalSucesso: false});
    }

    handleCloseModalError(event) {
        this.setState({showModalError: false});
    }

    handleCloseModalAcesso() {
        this.setState({showModalAcesso: false});
    }


    render() {
        return (
            <Container>
                <Header nomePagina="Cadastro de responsável" />
                <Container className="mt-4">
            <Form onSubmit={this.handlerSubmit}>
                    <Row>
                        <Col md="2">Nome completo:</Col>
                            <Col md="10">
                            <Form.Control 
                            type="text" 
                            onChange={this.handlerChange} 
                            value={this.state.nomeCompleto} 
                            name="nomeCompleto" id="nomeCompleto" 
                            placeholder="Informe seu nome completo..." required />
                        </Col>
                    </Row>

                <Row>
                    <Col md="2">E-mail:</Col>
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
                            value={this.state.email} 
                            name="email" 
                            id="email" 
                            placeholder="Informe seu e-mail..." required />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">
                        <Form.Label>
                            Nome do projeto:
                        </Form.Label>
                    </Col>
                    <Col md="10">
                        <InputGroup>
                            <Form.Control 
                            type="text" 
                            onChange={this.handlerChange} 
                            name="nomeDoProjeto" id="nomeDoProjeto" 
                            value={this.state.nomeDoProjeto} 
                            placeholder="Informe nome do projeto ...." required />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="mt-2" variant="primary" name="btnCadastrarResponsavel" id="btnCadastrarResponsavel" size="lg" block type="submit">
                            Gravar
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Nav.Link 
                        as="a"
                        className="btn btn-lg btn-secondary " 
                        href="/home/home"
                        >
                            Voltar ao menu
                        </Nav.Link>
                    </Col>
                </Row>
            </Form>
            </Container>
            <Footer />

            <div>
                <Modal id="modalSucesso" name="modalScuesso" show={this.state.showModalSucesso}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de responsável</Modal.Title>
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
                    <Modal.Title>Cadastro de responsável</Modal.Title>
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
                    <Modal.Title>Cadastro de responsável</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Usuário não tem permissão para cadastrar um responsável.
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