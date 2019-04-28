import * as React from "react";

export interface IFooterProps {
    className?:string
};

class Footer extends React.Component<IFooterProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>  {
        return (
            <footer className={this.props.className}>
                {this.props.children}
            </footer>
        );
    }
}

export default Footer;
