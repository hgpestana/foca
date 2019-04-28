import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Main from '../components/Main';
import Logo from "../components/Logo";
import Hr from '../components/Hr';

class Content extends React.Component<any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <Main role='main'>
                <Jumbotron>
                    <h1>Bem vindos!</h1>
                    <p>
                        A FOCA é uma plataforma web gratuita que está a ser desenvolvida com o objetivo de oferecer uma
                        ferramenta para facilitar a avaliação dos alunos. À medida que forem surgindo novidades e forem
                        disponibilizadas funcionalidades, esta página será atualizada. Quaisquer sugestões que queiram
                        ver adicionadas na plataforma ou que considerem ser importantes poderão ser enviadas para o
                        endereço de email <a href="mailto:hgpestana@gmail.com">hgpestana@gmail.com</a>.
                    </p>
                    <p>
                        O nosso logotipo e nome são uma homenagem ao concelho de Câmara de Lobos, que é assim conhecido
                        devido ao famoso lobo marinho da Madeira, também conhecido como foca monge.
                    </p>
                    <p className={"text-center"}>
                        <Logo height={"200"} width={"260"}/>
                    </p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Registo de utilizadores</Card.Title>
                                    <Card.Text>
                                        Esta funcionalidade permite o registo de novos utilizadores na plataforma
                                    </Card.Text>
                                    <Button variant="primary">Disponível brevemente</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Registo de escolas</Card.Title>
                                    <Card.Text>
                                        Esta funcionalidade permite o registo de novas escolas na plataforma.
                                    </Card.Text>
                                    <Button variant="primary">Disponível brevemente</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Registo de anos letivos</Card.Title>
                                    <Card.Text>
                                        Esta funcionalidade permite o registo de novos anos letivos na plataforma
                                    </Card.Text>
                                    <Button variant="primary">Disponível brevemente</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Main>
        );
    }
}

export default Content;
