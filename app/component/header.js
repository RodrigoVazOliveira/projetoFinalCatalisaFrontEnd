import { GrMoney } from 'react-icons/gr';
import { Row, Col } from 'react-bootstrap';

export default function Header(props) {
    return (
        <div className="container">
            <Row className="mt-4">
                <Col>
                <header>
                    <h1 className="text-center"><GrMoney /> Zupayments - {props.nomePagina}</h1>
                </header>
                </Col>
            </Row>
        </div>
    );
}