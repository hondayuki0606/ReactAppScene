// Reactの標準APIによるDOM定義（入れ子）

import React from 'react';

const Hello = () => React.createElement(
    'section',
    { className: 'box'},
    React.createElement(
        'h1',
        null,
        'Message'
    ),
    React.createElement(
        'p',
        {className:'hello'},
        'Hello world!'
    )
);

export default Hello;