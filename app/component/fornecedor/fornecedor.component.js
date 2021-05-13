import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import FornecedorService from '../../service/fornecedor.service';

class FormularioFornecedor extends React.Component{
    constructor(props) {
        super(props);
        this.state ={cpf:'',cnpj:'',razaoSocial:'',logradouro:'',numero:'',bairro:'',cidade:'',estado:'',cep:'',telefone:'',email:'',categoriaDeCusto:''};
        this.service = new FornecedorService();
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
    this.service.autenticar(this.state.cpf + '' + this.state.cnpj+ '' + this.state.razaoSocial + this.state.logradouro + '' + this.state.numero + '' + this.state.bairro + ''+
        this.state.cidade+''+this.state.estado+''+this.state.cep+''+this.state.telefone+''+ this.state.email +''+this.state.categoriaDeCusto);
        event.preventDefault();
}
render(){
    return (
        <Container className="mt-4">
        <Form onSubmit={this.handlerSubmit}>
            <fieldset className="fieldset">
                <legend className="text-center">Fornecedor</legend>

                <Row>
                                        <Col md="2">Razão Social </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="Razao Social" onChange={this.handlerChange} value={this.state.razaoSocial} name="Razao Social" id="Razao Social" placeholder="Informe a Razao Social..." required />
                                                </InputGroup>
                                        </Col>
                 </Row>
                 <Row>
                                   <Col md="2">Cpf</Col>
                                   <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="Cpf" onChange={this.handlerChange} value={this.state.cpf} name="cpf" id="cpf" placeholder="Informe o CPF..." required />
                                                </InputGroup>
                                   </Col>
                 </Row>
                 <Row>
                                   <Col md="2">Cnpj</Col>
                                   <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="Cnpj" onChange={this.handlerChange} value={this.state.cnpj} name="cnpj" id="cnpj" placeholder="Informe o CNPJ..." required />
                                                </InputGroup>
                                   </Col>
                 </Row>
                <Row>
                                        <Col md="2">E-mail </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="email" onChange={this.handlerChange} value={this.state.email} name="email" id="email" placeholder="Informe qual o e-mail..." required />
                                                </InputGroup>
                                        </Col>
                 </Row>
                 <Row>
                                        <Col md="2">Telefone </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="telefone" onChange={this.handlerChange} value={this.state.telefone} name="telefone" id="telefone" placeholder="Informe qual o telefone..." required />
                                                </InputGroup>
                                        </Col>
                 </Row>
                 <Row>
                                        <Col md="2">Logradouro </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="logradouro" onChange={this.handlerChange} value={this.state.logradouro} name="logradouro" id="logradouro" placeholder="Informe qual o logradouro..." required />
                                                </InputGroup>
                                        </Col>
                 </Row>
                 <Row>
                                        <Col md="2">Número </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="numero" onChange={this.handlerChange} value={this.state.numero} name="numero" id="numero" placeholder="Informe o número..." required />
                                                </InputGroup>
                                        </Col>
                 </Row>
                 <Row>
                                        <Col md="2">Bairro </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="bairro" onChange={this.handlerChange} value={this.state.bairro} name="bairro" id="bairro" placeholder="Informe o bairro..." required />
                                                </InputGroup>
                                        </Col>
                 </Row>
                 <Row>
                                        <Col md="2">Cidade </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="cidade" onChange={this.handlerChange} value={this.state.cidade} name="cidade" id="cidade" placeholder="Informe a cidade..." required />
                                                </InputGroup>
                                        </Col>
                 </Row>
                 
                 <Row>
                                        <Col md="2">Cep </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="cep" onChange={this.handlerChange} value={this.state.cep} name="cep" id="cep" placeholder="Informe qual o cep..." required />
                                                </InputGroup>
                                        </Col>
                 </Row>
                 <Row>
                                        <Col md="2">Estado </Col>
                                        <Col md="10">
                                                <InputGroup>
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                <AiOutlineMail />
                                                </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="estado" onChange={this.handlerChange} value={this.state.estadop} name="estado" id="estado" placeholder="Informe qual o estado..." required />
                                                </InputGroup>
                                        </Col>
                                        </Row>
                <Row>
                    <Col md="2">
                        <Form.Label>
                            Categoria de Custo:
                        </Form.Label>
                    </Col>
                    <Col md="10">
                        <Form.Control 
                        as="select" tabIndex="7" name="categotiaDeCusto" onChange={this.handlerChange} value={this.state.categoriaDeCusto} id="categotiaDeCusto">
                            <option value="">Escolha ....</option>
                            <option value="FACILITES">FACILITES</option>
                            <option value="BENEFICIOS">BENEFICIOS</option>
                            <option value="TECNOLOGIA">TECNOLOGIA</option>
                            <option value="OUTROS_FORNECEDORES">OUTROS FORNECEDORES</option>
                        </Form.Control>
                    </Col>

                </Row>
                 
                 <Row>
                         <Col>
                            <Button className="mt-2" variant="primary" name="btnAutenticar" id="btnAutenticar" size="lg" block type="submit">Enviar</Button>
                        </Col>
                </Row>
                </fieldset>
             </Form>
        </Container>
                                            );
                                        }
                                    }

                        export default FormularioFornecedor;