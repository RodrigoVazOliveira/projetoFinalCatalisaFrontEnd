import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header';
import Footer from '../footer';
import Menu from '../nav';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Header nomePagina="Página Ínicial" />
                <Menu />
                <Footer />
            </Container>
        );
    }
}