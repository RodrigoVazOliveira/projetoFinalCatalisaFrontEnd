import { Container, Nav } from 'react-bootstrap';

export default function Menu() {
    return (
        <Container>
            <header className="mt-4" >
                    <Nav fill variant="tabs"  className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="/responsavel/cadastrar" accesskey="r"> <kbd>ALT + r</kbd>Cadastrar Responsáveis</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/fornecedores/fornecedor" accesskey="s"><kbd>ALT + s</kbd> Fornecedores</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/pedido/cadastrar" accesskey="p"><kbd>ALT + p</kbd>Cadastrar pedido de compra</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/pedido/visualizar" accesskey="j"><kbd>ALT + j</kbd>Visualizar pedido de compra</Nav.Link>
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