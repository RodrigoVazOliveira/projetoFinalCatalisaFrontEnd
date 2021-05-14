import {Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import FormularioLogin from '../app/component/login/login.component';
import Router from 'next/router';
import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let token = localStorage.getItem('JWT_TOKEN');
    if (token != null) {
        Router.push('/home/home');
    }
  }

  render(){
    return  (
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
      );
    }
}
