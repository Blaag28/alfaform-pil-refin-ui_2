import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../../index';

const getHTMLTemplate = renderToString(
    <html lang='ru'>
        <head>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1, user-scalable=no'
            />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <title>Заявка на кредит или рефинансирование</title>
        </head>
        <body>
            <App/>
        </body>
    </html>
);

export default getHTMLTemplate;
