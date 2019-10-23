import React, { Component } from 'react';

import Heading from 'arui-feather/heading';
import Paragraph from 'arui-feather/paragraph';

import './header.css';

class Header extends Component {

    list = [
        {
            id: 1,
            title: 'Срок кредита',
            text: 'от 1 до 7 лет',
        },
        {
            id: 2,
            title: 'Сумма',
            text: 'до 5 млн руб.',
        },
        {
            id: 3,
            title: 'Процентная ставка',
            text: 'от 9.9 %',
        },
        {
            id: 4,
            title: 'Решение по заявке',
            text: 'за 2 минуты',
        },
    ];

    render() {
        const { title, preTitle } = this.props;

        return (
            <header >
                <div>
                    <Paragraph
                    >
                        { preTitle }
                    </Paragraph>
                    <Heading
                        theme='alfa-on-white'
                    >
                        { title }
                    </Heading>
                </div>
            </header>
        );
    }
}

export { Header };
