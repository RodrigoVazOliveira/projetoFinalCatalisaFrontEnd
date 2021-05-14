import React from "react";
import Header from '../header';
import Footer from '../footer';
import PedidoDeCompraService from '../../service/pedido.service';
import {Table, Form, Button, Container, Row, Col, Nav, Modal} from 'react-bootstrap';

export default class VisualizarPedidoDeCompraPendente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            corpoTabela: 'Não possuem dados a serem exibidos',
            dataInicial: '',
            dataInicialEnvio: '',
            showModalSucesso: false,
            dados: []

        };

        this.service = new PedidoDeCompraService();
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerData = this.handlerData.bind(this);
        this.handlerSubmitEnviarEmail = this.handlerSubmitEnviarEmail.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
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
        event.preventDefault();
        const resposta = this.service.pedidosPendenteDeEnvio(this.state.dataInicial);
        resposta.then((response) => {
            this.setState({dados: response.data});
        });
    }

    handlerData() {
        if (this.state.dados.length == 0) {
            return <tr><td colspan="8">{this.state.corpoTabela}</td></tr>;
        } else {
            return this.state.dados.map((item) => {
                return <tr key={item.numeroDePedido}>
                    <td>{item.numeroDePedido}</td>
                    <td>{item.saldo}</td>
                    <td>{item.fornecedor.cnpjOuCpf}</td>
                    <td>{item.fornecedor.razaoSocial}</td>
                    <td>{item.responsavel.email}</td>
                    <td>{item.responsavel.nomeCompleto}</td>
                </tr>
            });
        }
    }

    handlerSubmitEnviarEmail(event) {
        event.preventDefault();
        const resposta = this.service.enviarEmailParaResponsaveis(this.state.dataInicialEnvio);
        resposta.then((response) => {
            if (response.status == 200) {
                this.setState({
                    showModalSucesso: true
                });
            }
        });
    }

    handleCloseModal() {
        this.setState({
            showModalSucesso: false
        });
    }
 
    render() {
        return (
            <Container>
                
                
                <Header nomePagina="Visualizar pedidos de compra pendentes" />
                <Form className="mt-3" onSubmit={this.handlerSubmit}>
                    <Row>
                        <Col>Data inicial:</Col>
                        <Col>
                            <Form.Control
                            type="date"
                            name="dataInicial"
                            id="dataInicial"
                            onChange={this.handlerChange}
                            value={this.state.dataInicial}
                            size="lg"
                            tabsIndex="1"
                            required />
                        </Col>
                        <Col>
                            <Button
                            variant="primary"
                            name="btnBuscarPedidosPendentes"
                            id="btnBuscarPedidosPendentes"
                            type="submit" block>
                                Buscar
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Form className="mt-3" onSubmit={this.handlerSubmitEnviarEmail}>
                    <Row>
                        <Col>Data inicial:</Col>
                        <Col>
                            <Form.Control
                            type="date"
                            name="dataInicialEnvio"
                            id="dataInicialEnvio"
                            onChange={this.handlerChange}
                            value={this.state.dataInicialEnvio}
                            size="lg"
                            tabsIndex="1"
                            required />
                        </Col>
                        <Col>
                            <Button
                            variant="primary"
                            name="btnBuscarPedidosPendentes"
                            id="btnBuscarPedidosPendentes"
                            type="submit" block>
                                Enviar Email de cobrança
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                        <th>Número do PO</th>
                        <th>Saldo</th>
                        <th>CNPJ/CPF</th>
                        <th>Razão social</th>
                        <th>E-mail do responsável</th>
                        <th>Nome do responsável</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.handlerData()}
                    </tbody>
                </Table>

                <Row className="mt-3">
                    <Col>
                        <Nav.Link 
                        as="a"
                        className="btn btn-lg bg-white text-black" 
                        href="/home/home"
                        >
                            Voltar ao menu
                        </Nav.Link>
                    </Col>
                </Row>

                <div>
                <Modal id="modalSucesso" name="modalScuesso" show={this.state.showModalSucesso}>
                    <Modal.Header closeButton>
                    <Modal.Title>Envio de e-mail para responsáveis</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>E-mails enviados com sucesso!</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
                <Footer />
            </Container>
        );
    }
}