import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import UsuarioService from '../../service/usuario.service';
import Usuario from '../../models/usuario.dto';
import { AiOutlineMail } from 'react-icons/ai';
import Router from 'next/router';

export default class FormularioUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nomeCompleto: '', email: '', senha: '', nivelDeAcesso: ''};
        this.service = new UsuarioService();
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
        let usuario = new Usuario(this.state.nomeCompleto, this.state.email, this.state.senha, this.state.nivelDeAcesso);
        this.service.cadastrarNovoUsuario(usuario);
        event.preventDefault();
    }

    voltar() {
        
    }

    render() {
        return (
            <div>
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
                        <Form.Control as="select" name="nivelDeAcesso" onChange={this.handlerChange()} value={this.status.nivelDeAcesso} id="nivelDeAcesso">
                            <option value="">Escolha ....</option>
                            <option value="">Master</option>
                            <option value="">Financeiro</option>
                            <option value="">Compras</option>
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
                        <Button 
                        type="button" 
                        variant="secondary"
                        size="lg" 
                        onClick={this.voltar()}
                        block>
                            Voltar
                        </Button>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
