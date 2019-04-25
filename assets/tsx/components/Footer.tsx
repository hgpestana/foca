import * as React from "react";

export interface IFooterProps {
};

class Footer extends React.Component<IFooterProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>  {
        return (
            <footer>
                {this.props.children}
            </footer>
        );
    }
}

export default Footer;