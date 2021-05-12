import {Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import FormularioLogin from '../app/component/login.component';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ZupPayments</title>
        <meta name="description" content="Zupayments FrontEnd" />
      </Head>

      <body>
          <Container>
            <header>
              <Row>
                <Col>
                  <h1 className="text-center">Zupayments</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormularioLogin />
                </Col>
              </Row>
            </header>
          </Container>
      </body>
      <footer >
        
      </footer>
    </div>
  )
}
