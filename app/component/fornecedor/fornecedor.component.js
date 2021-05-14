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
            bairro: '',
            cidade: '',
            estado: '',
            cep: '',
            telefone: '',
            email: '',
            categoriaDeCusto: '',
            tipoDoc: true
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
                <Form className="mt-3" onSubmit={this.handleSubmit}>              
                    <Row>
                        <Col md="1">
                            <Form.Label>CNPJ:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.cnpj}
                            name="cnpj"
                            id="cnpj"
                            size="lg"
                            tabIndex="1" />
                        </Col>
                        <Col md="1">
                            <Form.Label>CPF:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.cpf}
                            name="cpf"
                            id="cpf"
                            size="lg"
                            tabIndex="2" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="1">
                            <Form.Label>Razão Social:</Form.Label>
                        </Col>
                        <Col md="11">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.razaoSocial}
                            name="razaoSocial"
                            id="razaoSocial"
                            size="lg"
                            tabIndex="3"
                            required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="1">
                            <Form.Label>CEP:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.cep}
                            name="cep"
                            id="cep"
                            size="lg"
                            tabIndex="4" required />
                        </Col>
                        <Col md="1">
                            <Form.Label>Logradouro:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.logradouro}
                            name="logradouro"
                            id="logradouro"
                            size="lg"
                            tabIndex="5" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="1">
                            <Form.Label>Bairro:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.bairro}
                            name="bairro"
                            id="bairro"
                            size="lg"
                            tabIndex="6" required />
                        </Col>
                        <Col md="1">
                            <Form.Label>Número:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.numero}
                            name="numero"
                            id="numero"
                            size="lg"
                            tabIndex="7" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="1">
                            <Form.Label>Cidade:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.cidade}
                            name="cidade"
                            id="cidade"
                            size="lg"
                            tabIndex="8" required />
                        </Col>
                        <Col md="1">
                            <Form.Label>Estado:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.estado}
                            name="estado"
                            id="estado"
                            size="lg"
                            tabIndex="9" required />
                        </Col>
                    </Row>

                    <Row>
                        <Col md="1">
                            <Form.Label>Telefone:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.telefone}
                            name="telefone"
                            id="telefone"
                            size="lg"
                            tabIndex="10" required />
                        </Col>
                        <Col md="1">
                            <Form.Label>E-mail:</Form.Label>
                        </Col>
                        <Col md="5">
                            <Form.Control 
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            name="email"
                            id="email"
                            size="lg"
                            tabIndex="11" required />
                        </Col>
                    </Row>
                    <Row>
                    <Col md="1">
                        <Form.Label>
                            Categoria de custo:
                        </Form.Label>
                    </Col>
                    <Col md="11">
                        <Form.Control 
                        as="select" 
                        name="categoriaDeCusto" 
                        onChange={this.handleChange} 
                        value={this.state.categoriaDeCusto} 
                        id="categoriaDeCusto"
                        className="custom-select" required>
                            <option value="FACILITIES">FACILITIES</option>
                            <option value="BENEFICIOS">BENEFICIOS</option>
                            <option value="TECNOLOGIA">TECNOLOGIA</option>
                            <option value="OUTROS_FORNECEDORES">OUTROS FORNECEDORES</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button 
                        className="mt-2" 
                        variant="primary" 
                        name="btnCadastroDeFornecedor" 
                        id="btnCadastroDeFornecedor" 
                        size="lg" block 
                        type="submit">
                            Gravar
                        </Button>
                    </Col>
                </Row>
                </Form>
                <Footer />
            </Container>
        );
    }
}