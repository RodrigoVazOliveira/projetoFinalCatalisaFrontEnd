import React, { useEffect } from 'react';
import { GrMoney } from 'react-icons/gr';
import { Nav } from 'react-bootstrap';
import Router from 'next/router';

export default function HomePage(props) {

    let token;

    useEffect(function(){
        token = localStorage.getItem('JWT_TOKEN');
        if (token == null) {
            Router.push('/');
        }
    })

    return  (
        <div className="container">
                <header>
                     <h1 className="text-center"><GrMoney /> Zupayments</h1>
                </header>
                <header className="mt-4">
                    <Nav justify variant="tabs" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/responsaveis/responsavel" accesskey="r"> <kbd>ALT + r</kbd> Responsáveis</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/fornecedores/fornecedor" accesskey="s"><kbd>ALT + s</kbd> Fornecedores</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/pedidos/pedido" accesskey="p"> <kbd>ALT + p</kbd> Pedido de compra</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/notas/nota" accesskey="o">
                           <kbd>ALT + o</kbd> Nota Fiscal
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </header>
        </div>
    );
};