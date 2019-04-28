import * as React from "react";

export interface ILogoProps {
    className?: string
    width: string
    height: string
};

class Logo extends React.Component<ILogoProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <svg className={this.props.className} width={this.props.width} height={this.props.height} cursor="default" viewBox="0 0 132.29166 100.54166"
                 xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-62.682 -89.137)">
                    <g transform="matrix(.35278 0 0 -.35278 -35.278 289.94)">
                        <g transform="translate(81.396 5.6785)" clipPath="url(#clipPath3773)">
                            <g transform="translate(382.64 432.97)">
                                <path
                                    d="m0 0v50.268c0 37.404-26.925 67.725-60.137 67.725-33.214 0-60.138-30.321-60.138-67.725v-50.268c0.47-18.33 1.474-27.488 2.535-35.734 2.655-31.097 21.752-48.421 48.98-52.837 2.714-0.608 4.363-0.774 4.363-0.774h189.08c-130.62 56.525-124.68 89.345-124.68 89.345"
                                    fill="#666"/>
                            </g>
                            <g transform="translate(339.26 492)">
                                <path
                                    d="m0 0c0 9.259-7.505 16.762-16.76 16.762-9.257 0-16.763-7.503-16.763-16.762 0-9.256 7.506-16.761 16.763-16.761 9.255 0 16.76 7.505 16.76 16.761"
                                    fill="#ccc"/>
                            </g>
                            <g transform="translate(298.84 505.97)">
                                <path d="m0 0c5.257 0 5.257 8.15 0 8.15-5.258 0-5.258-8.15 0-8.15" fill="#ccc"/>
                            </g>
                            <g transform="translate(322.5 492.58)">
                                <path d="m0 0c6.58 0 6.58 8.154 0 8.154-6.579 0-6.579-8.154 0-8.154" fill="#333"/>
                            </g>
                            <g transform="translate(349.56 505.97)">
                                <path d="m0 0c5.258 0 5.258 8.15 0 8.15-5.257 0-5.257-8.15 0-8.15" fill="#ccc"/>
                            </g>
                            <g transform="translate(322.5 492.58)">
                                <path d="m0 0s-1.452-6.64-8.525-6.679" fill="none" stroke="#666"
                                      strokeMiterlimit="10"/>
                            </g>
                            <g transform="translate(322.01 492.58)">
                                <path d="m0 0s1.452-6.64 8.524-6.679" fill="none" stroke="#666" strokeMiterlimit="10"/>
                            </g>
                            <g transform="translate(256.72 509.69)">
                                <path d="m0 0c9.337 0 19.203-4.404 27.132-8.456" fill="none" stroke="#333"
                                      strokeMiterlimit="10"/>
                            </g>
                            <g transform="translate(255.31 501.05)">
                                <path d="m0 0c8.811 0 16.913-3.701 25.546-4.582" fill="none" stroke="#333"
                                      strokeMiterlimit="10"/>
                            </g>
                            <g transform="translate(254.08 490.48)">
                                <path d="m0 0c6.343 0 12.684 1.233 19.203 1.057 2.468 0 4.757-0.353 7.225-0.353"
                                      fill="none" stroke="#333" strokeMiterlimit="10"/>
                            </g>
                            <g transform="translate(390.26 509.69)">
                                <path d="m0 0c-9.337 0-19.203-4.404-27.132-8.456" fill="none" stroke="#333"
                                      strokeMiterlimit="10"/>
                            </g>
                            <g transform="translate(391.68 501.05)">
                                <path d="m0 0c-8.812 0-16.912-3.701-25.546-4.582" fill="none" stroke="#333"
                                      strokeMiterlimit="10"/>
                            </g>
                            <g transform="translate(392.91 490.48)">
                                <path d="m0 0c-6.344 0-12.684 1.233-19.203 1.057-2.468 0-4.757-0.353-7.226-0.353"
                                      fill="none" stroke="#333" strokeMiterlimit="10"/>
                            </g>
                            <g transform="translate(481.84 350.69)">
                                <path
                                    d="m0 0s53.652 3.267 67.065-16.463c0 0-4.732-14.192-33.532-7.095 0 0 7.493-21.214 0-31.468l-33.533 55.026m177.95-108.9"
                                    fill="#555"/>
                            </g>
                            <g transform="translate(268.7 392.57)">
                                <path d="m0 0s-32.049-46.618-54.194-48.949c0 0 62.659-11.656 69.346 27.388"
                                      fill="#555"/>
                            </g>
                            <g transform="translate(382.3 392.57)">
                                <path d="m0 0s32.049-46.618 54.194-48.949c0 0-62.657-11.656-69.346 27.388" fill="#555"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}

export default Logo;
