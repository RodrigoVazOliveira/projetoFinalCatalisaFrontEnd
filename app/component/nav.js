import { Container, Nav } from 'react-bootstrap';

export default function Menu() {
    return (
        <Container>
            <header className="mt-4">
                    <Nav fill variant="tabs">
                        <Nav.Item>
                            <Nav.Link href="/responsavel/cadastrar" accesskey="r"> <kbd>ALT + r</kbd> Responsáveis</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/fornecedores/fornecedor" accesskey="s"><kbd>ALT + s</kbd> Fornecedores</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/pedidos/pedido" accesskey="p"><kbd>ALT + p</kbd> Pedido de compra</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/notas/nota" accesskey="o">
                           <kbd>ALT + o</kbd> Nota Fiscal
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </header>
        </Container>
    );
}