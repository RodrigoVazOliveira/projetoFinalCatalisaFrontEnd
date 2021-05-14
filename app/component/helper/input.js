import { Form, Row, Col } from 'react-bootstrap';

export default function Input(props) {
    return (
        <Row>
            <Col md="4">
                <Form.Label>{props.label}</Form.Label>
            </Col>
            <Col md="8">
                <Form.Control 
                type={props.tipo}
                onChange={props.handler}
                value={props.value}
                name={props.nomeInput}
                id={props.idInput}
                required
                size="lg"
                tabIndex={props.index} />
            </Col>
        </Row>
    );
}