import React from 'react';

import Panel from './index';
import {Button} from './index';

const element = document.createElement('div');

const preview = (
    <Panel title='A Panel with a title'>
        <Button>A Button</Button>
        &nbsp;
        <Button disabled={true}>A disabled Button</Button>
    </Panel>
);

React.render(preview, element);
document.body.appendChild(element);
