import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class FormularioCadastroResponsavel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nome: '', email: '', nomeDoProjeto: ''};

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
        alert(this.state.email + ' '+this.state.nomeDoProjeto);
        event.preventDefault();
    }


    render() {
        return (
            <Container className="mt-4">
            <Form onSubmit={this.handlerSubmit}>
                <legend>Cadastro de Responsável</legend>
                <Row>
                    <Col md="2">Nome Completo:</Col>
                    <Col md="10">
                        <Form.Control type="email" onChange={this.handlerChange} value={this.state.email} name="email" id="email" placeholder="Informe seu e-mail..." required />
                    </Col>
                </Row>

                <Row>
                    <Col md="2">Nome do Projeto:</Col>
                    <Col md="10">
                        <Form.Control type="email" onChange={this.handlerChange} value={this.state.email} name="email" id="email" placeholder="Informe seu e-mail..." required />
                    </Col>
                </Row>

                <Row>
                    <Col md="2">E-mail:</Col>
                    <Col md="10">
                        <Form.Control type="email" onChange={this.handlerChange} value={this.state.email} name="email" id="email" placeholder="Informe seu e-mail..." required />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="primary" type="submit">Cadastrar</Button>
                    </Col>
                </Row>
            </Form>
            </Container>
        );
    }
}

export default FormularioCadastroResponsavel;