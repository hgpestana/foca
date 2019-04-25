import * as React from 'react';
import Footer from '../components/Footer';

class Bottom extends React.Component<any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <Footer>
                Copyright 2019 - Foca
            </Footer>
        );
    }
}

export default Bottom;