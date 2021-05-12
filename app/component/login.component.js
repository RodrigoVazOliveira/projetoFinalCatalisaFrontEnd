import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class FormularioLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: '', senha: ''};

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
        alert(this.state.email + ' ' + this.state.senha);
        event.preventDefault();
    }


    render() {
        return (
            <Container className="mt-4">
            <Form onSubmit={this.handlerSubmit}>
                <legend>Login</legend>
                <Row>
                    <Col md="2">E-mail:</Col>
                    <Col md="10">
                        <Form.Control type="email" onChange={this.handlerChange} value={this.state.email} name="email" id="email" placeholder="Informe seu e-mail..." required />
                    </Col>
                </Row>

                
                <Row>
                    <Col md="2">Senha:</Col>
                    <Col md="10">
                        <Form.Control type="password" onChange={this.handlerChange} name="senha" id="senha" value={this.state.senha} placeholder="Informe sua senha...." />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">Enviar</Button>
                    </Col>
                </Row>
            </Form>
            </Container>
        );
    }
}

export default FormularioLogin;