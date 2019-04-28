/** SCSS */
import '../css/style.scss';

/** React */
import * as React from 'react';
import { render } from 'react-dom';
import Frontpage from './frontpage/Frontpage';

render(
    <Frontpage/>,
    document.getElementById('root')
);
