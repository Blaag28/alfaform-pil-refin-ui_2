import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'arui-feather/cn';

import AruiContent from 'arui-private/content';
import ThemeProvider from 'arui-feather/theme-provider';

import './content.css';

@cn('custom-content')
class Content extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render(cn) {
        const { children } = this.props;

        return (
            <AruiContent theme='alfa-on-white'>
                <ThemeProvider theme='alfa-on-white'>
                    <div className={ cn() }>
                        { children }
                    </div>
                </ThemeProvider>
            </AruiContent>
        );
    }
}

export { Content };
