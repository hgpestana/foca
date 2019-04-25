import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component<any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <Navbar bg={'dark'} variant={'dark'} expand={'lg'}>
                <Navbar.Brand href={'#home'}>{'Foca'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">{'Início'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;