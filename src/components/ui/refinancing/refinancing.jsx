import React, { Component } from 'react';
import cn from 'arui-feather/cn';

import Heading from 'arui-feather/heading';
import Paragraph from 'arui-feather/paragraph';
import List from 'arui-feather/list';

import './refinancing.css';


@cn('refin')
class Refinancing extends Component {
    refinInfo = [
        {
            key: '1',
            value: 'Процентная ставка от 9,9%',
        },
        {
            key: '2',
            value: 'На срок от 1 до 7 лет',
        },
        {
            key: '3',
            value: 'Рефинансирование до 5 кредитов, в том числе кредитной карты, ипотеки и т.д.',
        },
        {
            key: '4',
            value: 'Возможность получить дополнительные средства наличными',
        },
    ];

    render(cn) {
        return (
            <div className='refin'>
                <div className={ cn('refin-info') }>
                    <Heading size='s' className={ cn('heading') }>
                        Рефинансирование: погасите невыгодные кредиты
                    </Heading>
                    <Paragraph className={ cn('text') }>
                        Погасите все свои кредиты и объедините их в один, в нашем банке. Платите меньше на более
                        выгодных условиях:
                    </Paragraph>
                    <List items={ this.refinInfo } className={ cn('list') } />
                </div>
            </div>
        );
    }
}

export default Refinancing;
