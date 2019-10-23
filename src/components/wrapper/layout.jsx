import React, { Component } from 'react';

import ErrorPage from 'arui-private/error-page';
import ThemeProvider from 'arui-feather/theme-provider';
import './layout.css';

export default class Layout extends Component {

    render() {

        return (
            <ThemeProvider theme='alfa-on-white'>
                    <ErrorPage
                        traceId={ '1489583aae003360' }
                        returnUrl={ '#' }
                    />
            </ThemeProvider>
        );
    }
}
