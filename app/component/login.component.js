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
            <Container>
            <Form onSubmit={this.handlerSubmit}>
                <Row>
                    <Col>E-mail:</Col>
                    <Col>
                        <Form.Control type="email" onChange={this.handlerChange} value={this.state.email} name="email" id="email" placeholder="Informe seu e-mail..." required />
                    </Col>
                </Row>
                <Row>
                    <Col>Senha:</Col>
                    <Col>
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