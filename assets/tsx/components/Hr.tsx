import * as React from "react";

export interface IHrProps {
};

class Hr extends React.Component<IHrProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>  {
        return (
            <hr />
        );
    }
}

export default Hr;
