import React from "react";
import { Form, Button, Container, Row, Col, InputGroup, Nav, Modal } from 'react-bootstrap';
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
    }

    render() {
        return (
            <Container>
                <Header nomePagina="Cadastro de fornecedor" />
                <Footer />
            </Container>
        );
    }
}