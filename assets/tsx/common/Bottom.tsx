import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';

class Bottom extends React.Component<any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <Footer className={"footer"}>
                <p className="float-right">
                    <a href="#">
                        <FontAwesomeIcon icon={faChevronCircleUp}/>
                    </a>
                </p>
                <p> © 2019 - FOCA </p>
            </Footer>
        );
    }
}

export default Bottom;
