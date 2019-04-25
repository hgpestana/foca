import * as React from 'react';
import Header from '../common/Header';
import Content from './Content';
import Bottom from '../common/Bottom';

class Frontpage extends React.Component<any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <div id='frontpage'>
                <Header/>
                <Content/>
                <Bottom/>
            </div>
        );
    }
}

export default Frontpage;