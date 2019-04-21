import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";

export default class Header extends React.Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <Container>
                <Row>
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                </Row>
            </Container>
        );
    }
}