import React from "react";
import { Form, Button, Container, Row, Col, InputGroup, Nav, Modal } from 'react-bootstrap';
import Input from '../helper/input';
import Header from '../header';
import Footer from '../footer';

export default class FormCadastroFornecedor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: '',
            cnpj: '',
            razaoSocial: '',
            logradouro: '',
            numero: '',
            bairro: ''.
            cidade: '',
            estado: '',
            cep: '',
            telefone: '',
            email: '',
            categoriaDeCusto: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value  = target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Container>
                <Header nomePagina="Cadastro de fornecedor" />
                <Form onSubmit={handleSubmit}>
                    <Input 
                        label="CPF"
                        tipo="text"
                        handler={this.handleChange}
                        value={this.state.cpf}
                        name="cpf"
                        idInput="cpf"
                        index="1" />
                </Form>
                <Footer />
            </Container>
        );
    }
}