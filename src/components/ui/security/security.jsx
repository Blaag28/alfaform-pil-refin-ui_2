import React, { Component } from 'react';
import IconGuard from 'arui-feather/icon/category/category-guard';
import Paragraph from 'arui-feather/paragraph';
import cn from 'arui-feather/cn';

import './security.css';

@cn('security')
class Security extends Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <IconGuard className={ cn('icon') } size='m' />
                <Paragraph className={ cn('caption') }>
                    Мы&nbsp;гарантируем безопасность и&nbsp;сохранность ваших данных
                </Paragraph>
            </div>
        );
    }
}

export default Security;
