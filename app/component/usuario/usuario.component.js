import React, { useState } from 'react';
import { Form, Button,  Container, Row, Col, InputGroup, Nav, Modal } from 'react-bootstrap';
import UsuarioService from '../../service/usuario.service';
import Usuario from '../../models/usuario.dto';
import { AiOutlineMail } from 'react-icons/ai';
import Header from '../header';
import Footer from '../footer';

export default class FormularioUsuario extends React.Component {

    
    constructor(props) {
        super(props);

        this.state = {nomeCompleto: '', email: '', senha: '', nivelDeAcesso: '', modalHide: false,showModalSucesso: false, showModalError: false};
        
        this.service = new UsuarioService();

        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCloseModalError = this.handleCloseModalError.bind(this);
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
        let usuario = new Usuario(this.state.nomeCompleto, this.state.email, this.state.senha, this.state.nivelDeAcesso);
        const resposta = this.service.cadastrarNovoUsuario(usuario);
        event.preventDefault();
        resposta.then(response => {
            if (response.status == 201) {
                this.setState({showModalSucesso: true});
            }
        }).catch(error => {
            if (error.response.status == 400) {
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

    render() {
        return (
            <div>
            <Header nomePagina="Cadastro de usuário" />
            <Container className="mt-4">
            <Form onSubmit={this.handlerSubmit}>
                <fieldset className="fieldset">
                    <legend className="text-center">Cadastro de novo Usuário</legend>
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
                    <Col md="2">Senha:</Col>
                    <Col md="10">
                        <InputGroup>
                            <Form.Control 
                            type="password" 
                            onChange={this.handlerChange} 
                            name="senha" id="senha" 
                            value={this.state.senha} 
                            placeholder="Informe sua senha...." required />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">
                        <Form.Label>
                            Nivel De Acesso:
                        </Form.Label>
                    </Col>
                    <Col md="10">
                        <Form.Control 
                        as="select" name="nivelDeAcesso" onChange={this.handlerChange} value={this.state.nivelDeAcesso} id="nivelDeAcesso">
                            <option value="">Escolha ....</option>
                            <option value="PERFIL_MASTER">Master</option>
                            <option value="PERFIL_FINANCEIRO">Financeiro</option>
                            <option value="PERFIL_COMPRAS">Compras</option>
                        </Form.Control>
                    </Col>

                </Row>
                </fieldset>
                <Row>
                    <Col>
                        <Button className="mt-2" variant="primary" name="btnCadastrarNovoUsuario" id="btnCadastrarNovoUsuario" size="lg" block type="submit">
                            Gravar
                        </Button>
                    </Col>
                </Row>
            </Form>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Nav.Link 
                        as="a"
                        className="btn btn-lg btn-secondary " 
                        href="/"
                        >
                            Voltar
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
            <Footer />
            <div>
                <Modal id="modalSucesso" name="modalScuesso" show={this.state.showModalSucesso}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de Usuário</Modal.Title>
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
                    <Modal.Title>Cadastro de Usuário</Modal.Title>
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
                </div>
        );
    }
}
