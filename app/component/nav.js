import { Container, Nav } from 'react-bootstrap';

export default function Menu() {
    return (
        <Container>
            <header className="mt-4" >
                    <Nav variant="pills" className="flex-column justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="/responsavel/cadastrar" accesskey="r">Cadastrar Responsáveis</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/fornecedor/cadastrar" accesskey="s">Cadastrar fornecedor</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/pedido/cadastrar" accesskey="p">Cadastrar pedido de compra</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/pedido/visualizar" accesskey="j">Visualizar pedido de compra</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/nota/cadastrar" accesskey="o">
                             Cadastrar Nota Fiscal
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/usuario/cadastrar" accesskey="c">
                                Cadastrar Usuário
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/sair" accesskey="c">
                                Sair
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </header>
        </Container>
    );
}