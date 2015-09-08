import React from 'react';

import Component from './Component/Component';

const element = document.createElement('div');
React.render(<Component />, element);
document.body.appendChild(element);
