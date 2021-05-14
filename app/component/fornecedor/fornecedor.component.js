import React from "react";
import { Form, Button, Container, Row, Col, Nav, Modal } from 'react-bootstrap';
import Header from '../header';
import Footer from '../footer';
import FornecedorService from '../../service/fornecedor.service';
import Fornecedor from '../../models/fornecedor.dto';

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
            showModalSucesso: false,
            showModalError: false,
            showModalAcesso: false,
            mensagemErro: ''
        };

        this.service = new FornecedorService();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.buscarEnderecoCompleto = this.buscarEnderecoCompleto.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCloseModalError = this.handleCloseModalError.bind(this);
        this.handleCloseModalAcesso = this.handleCloseModalAcesso.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let fornecedorDto = new Fornecedor(
            this.state.cpf,
            this.state.cnpj,
            this.state.razaoSocial,
            this.state.logradouro,
            this.state.numero,
            this.state.bairro,
            this.state.cidade,
            this.state.estado,
            this.state.cep,
            this.state.telefone,
            this.state.email,
            this.state.categoriaDeCusto
        );
        
        const resposta = this.service.cadastrarNovoFornecedor(fornecedorDto);

        resposta.then((response) => {
            this.setState({
                showModalSucesso: true,
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
            });
        }).catch((error) => {
            if (error.response.status == 400) {
                this.setState({
                    showModalError: true
                });
            } else if (error.response.status == 403) {
                this.setState({
                    showModalAcesso: true,
                    mensagemErro: error.response.data.mensagem
                });
            }
        })

    }

    handleChange(event) {
        const target = event.target;
        const value  = target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    buscarEnderecoCompleto() {
        const endereco = this.service.buscarEndereco(this.state.cep);
        endereco.then((response) => {
            const dados = response.data;
            if (dados.hasOwnProperty('erro')) {
                alert(`CEP ${this.state.cep} não localizado!`);
            }
            this.setState({
                logradouro: dados.logradouro,
                bairro: dados.bairro,
                cidade: dados.localidade,
                estado: dados.uf,
            });
        }).catch((error) => {
            alert(`CEP ${this.state.cep} não localizado`);
        });
    }


    handleCloseModal() {
        this.setState({showModalSucesso: false});
    }

    handleCloseModalError() {
        this.setState({showModalError: false});
    }

    handleCloseModalAcesso() {
        this.setState({showModalAcesso: false});
    }

    render() {
        return (
            <Container>
                <Header nomePagina="Cadastro de fornecedor" />
                <Form className="mt-3" onSubmit={this.handleSubmit}>              
                    <Row>
                        <Col md="2">
                            <Form.Label>CNPJ:</Form.Label>
                        </Col>
                        <Col md="4">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.cnpj}
                            name="cnpj"
                            id="cnpj"
                            size="lg"
                            tabIndex="1" />
                        </Col>
                        <Col md="2">
                            <Form.Label>CPF:</Form.Label>
                        </Col>
                        <Col md="4">
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
                        <Col md="2">
                            <Form.Label>Razão Social:</Form.Label>
                        </Col>
                        <Col md="10">
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
                        <Col md="2">
                            <Form.Label>CEP:</Form.Label>
                        </Col>
                        <Col md="4">
                            <Form.Control 
                            type="number"
                            onChange={this.handleChange}
                            onBlur={this.buscarEnderecoCompleto}
                            value={this.state.cep}
                            name="cep"
                            id="cep"
                            size="lg"
                            tabIndex="4" required />
                        </Col>
                        <Col md="2">
                            <Form.Label>Logradouro:</Form.Label>
                        </Col>
                        <Col md="4">
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
                        <Col md="2">
                            <Form.Label>Bairro:</Form.Label>
                        </Col>
                        <Col md="4">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.bairro}
                            name="bairro"
                            id="bairro"
                            size="lg"
                            tabIndex="6" required />
                        </Col>
                        <Col md="2">
                            <Form.Label>Número:</Form.Label>
                        </Col>
                        <Col md="4">
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
                        <Col md="2">
                            <Form.Label>Cidade:</Form.Label>
                        </Col>
                        <Col md="4">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.cidade}
                            name="cidade"
                            id="cidade"
                            size="lg"
                            tabIndex="8" required />
                        </Col>
                        <Col md="2">
                            <Form.Label>Estado:</Form.Label>
                        </Col>
                        <Col md="4">
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
                        <Col md="2">
                            <Form.Label>Telefone:</Form.Label>
                        </Col>
                        <Col md="4">
                            <Form.Control 
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.telefone}
                            name="telefone"
                            id="telefone"
                            size="lg"
                            tabIndex="10" required />
                        </Col>
                        <Col md="2">
                            <Form.Label>E-mail:</Form.Label>
                        </Col>
                        <Col md="4">
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
                    <Col md="2">
                        <Form.Label>
                            Categoria de custo:
                        </Form.Label>
                    </Col>
                    <Col md="10">
                        <Form.Control 
                        as="select" 
                        name="categoriaDeCusto" 
                        onChange={this.handleChange} 
                        value={this.state.categoriaDeCusto} 
                        id="categoriaDeCusto"
                        className="custom-select" value={this.state.categoriaDeCusto} required>
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
                <Row className="mt-3">
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
                <Footer />
                <div>
                <Modal id="modalSucesso" name="modalScuesso" show={this.state.showModalSucesso}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de fornecedor</Modal.Title>
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
                        <Modal.Title>Cadastro de fornecedor</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Existem erros de dados, favor verificar!</p>
                            <p>{this.state.mensagemErro}</p>
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
                    <Modal.Title>Cadastro de fornecedor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Usuário não tem permissão para cadastrar de fornecedor.</p>
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