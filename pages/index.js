import {Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import FormularioLogin from '../app/component/login/login.component';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ZupPayments</title>
        <meta name="description" content="Zupayments FrontEnd" />
      </Head>
          <Container>
              <Row>
                <Col>
                  <FormularioLogin />
                </Col>
              </Row>
          </Container>
    </div>
  )
}
