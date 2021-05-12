import React from 'react';
import { GrMoney } from 'react-icons/gr';
import { Nav } from 'react-bootstrap';

export default function Home() {
    return (

        <div className="container">
                <header>
                     <h1 className="text-center"><GrMoney /> Zupayments</h1>
                </header>
                <header className="mt-4">
                    <Nav justify variant="tabs" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/responsaveis/responsavel" accessKey="r"> <kbd>ALT + r</kbd> Responsáveis</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/fornecedores/fornecedor" accessKey="s" eventKey="link-1"><kbd>ALT + s</kbd> Fornecedores</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/pedidos/pedido" eventKey="link-2" accessKey="p"> <kbd>ALT + p</kbd> Pedido de compra</Nav.Link>
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