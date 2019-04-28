import * as React from "react";

export interface IMainProps {
    role?: string;
};

class Main extends React.Component<IMainProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>  {
        return (
            <main role={this.props.role}>
                {this.props.children}
            </main>
        );
    }
}

export default Main;