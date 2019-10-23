import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'arui-feather/cn';

import Paragraph from 'arui-feather/paragraph';
import Button from 'arui-feather/button';

require('./footer.css');

@cn('steps-footer')
class Footer extends Component {
    static propTypes = {
        version: PropTypes.string,
    };

    handleLinkClick = () => {};

    render(cn) {
        const year = new Date().getFullYear();

        return (
            <footer className={ cn() }>
                <Paragraph className={ cn('info') }>
                    Генеральная лицензия Банка России №1326 от 16 января 2015 г. «Альфа-Банк» является частью
                    консорциума «Альфа-Групп» © 2001–
                    { year }
                    { ' ' }
                    «Альфа-Банк»
                </Paragraph>
                <Paragraph className={ cn('info') }>107078, Москва, ул. Каланчевская, 27</Paragraph>
                <div className={ cn('top') }>
                    <a
                        className={ cn('button') }
                        href='https://alfabank.ru/feedback/support/?code=ankPILRefin'
                        rel='noopener noreferrer'
                        target='_blank'
                        onClick={ this.handleLinkClick }
                    >
                        <Button text='Оставить обратную связь' tag='span' size='s' />
                    </a>
                    <Paragraph className={ cn('text') }>
                        Если у вас есть вопросы по заполнению анкеты, напишите
                        { ' ' }
                        <span title={ this.props.version }>нам</span>
                    </Paragraph>
                </div>
            </footer>
        );
    }
}

export { Footer };
