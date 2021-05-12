import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import LoginService from '../../service/login.service';

class FormularioLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: '', senha: ''};

        this.service = new LoginService();

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
        this.service.autenticar(this.state.email, this.state.senha);
        event.preventDefault();
    }


    render() {
        return (
            <Container className="mt-4">
            <Form onSubmit={this.handlerSubmit}>
                <fieldset className="fieldset">
                    <legend className="text-center">Login</legend>
                <Row>
                    <Col md="2">E-mail:</Col>
                    <Col md="10">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <AiOutlineMail />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="email" onChange={this.handlerChange} value={this.state.email} name="email" id="email" placeholder="Informe seu e-mail..." required />
                        </InputGroup>
                    </Col>
                </Row>

                
                <Row>
                    <Col md="2">Senha:</Col>
                    <Col md="10">

                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <RiLockPasswordFill />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="password" onChange={this.handlerChange} name="senha" id="senha" value={this.state.senha} placeholder="Informe sua senha...." />
                        </InputGroup>
                        
                    </Col>
                </Row>
                </fieldset>
                <Row>
                    <Col>
                        <Button className="mt-2" variant="primary" name="btnAutenticar" id="btnAutenticar" size="lg" block type="submit">Enviar</Button>
                    </Col>
                </Row>
            </Form>
            </Container>
        );
    }
}

export default FormularioLogin;