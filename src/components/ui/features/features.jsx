import React, { Component } from 'react';
import pt from 'prop-types';
import cn from 'arui-feather/cn';
import performance from 'arui-feather/performance';
import Heading from 'arui-feather/heading';

import './features.css';

@performance()
@cn('features')
export default class Features extends Component {
    static propTypes = {
        items: pt.arrayOf(
            pt.shape({
                id: pt.number,
                title: pt.string,
                text: pt.string,
            })
        ),
    };

    render(cn) {
        const { items } = this.props;
        return (
            <ul className={ cn() }>
                { items.map(item => this.renderItem(item, cn)) }
            </ul>
        );
    }

    renderItem(item, cn) {
        const { id, title, text } = item;
        return (
            <li key={ id } className={ cn('item') }>
                <p className={ cn('title') }>
                    { title }
                </p>
                <Heading size='s' className={ cn('text') }>
                    { text }
                </Heading>
            </li>
        );
    }
}
