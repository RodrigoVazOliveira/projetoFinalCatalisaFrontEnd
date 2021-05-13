import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import  ResponsavelDTO  from '../../models/responsavel.dto';
import  ResponsavelService  from '../../service/responsavel.service';

export default class FormularioResponsavel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nomeCompleto: '', email: '', nomeDoProjeto: ''};
        this.service = new ResponsavelService();
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
        const responsavel = new ResponsavelDTO(this.state.nomeCompleto, this.state.email, this.state.nomeDoProjeto);
        const resposta    = this.service.cadastrarNovoResponsavel(responsavel);
        event.preventDefault();
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
            </Form>
            </Container>
                <Footer />
            </Container>
        );
    }
}