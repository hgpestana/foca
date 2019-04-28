import * as React from "react";

export interface IImageProps {
    alt?: string
    src: string
    width?: string
    height?: string
    class?: string
};

class Image extends React.Component<IImageProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>  {
        return (
            <img alt={this.props.alt} src={this.props.src} width={this.props.width}
                 height={this.props.height} className={this.props.class}/>
        );
    }
}

export default Image;
