import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupContainerProvider from 'arui-feather/popup-container-provider';
import Popup from 'arui-feather/popup';
import IconButton from 'arui-feather/icon-button';
import AlphaIcon from 'arui-feather/icon/ui/close-circle';

import performance from 'arui-feather/performance';

import cn from 'arui-feather/cn';

require('./popup-wrapper.css');

@performance(true)
@cn('popup-wrapper')
class PopupWrapper extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        children: PropTypes.node,
        onCloseClick: PropTypes.func
    };

    setRef = (popup) => { this.popup = popup; };

    componentDidMount() {
        this.popup.setPosition(0, 0); // eslint-disable-line
    }

    render(cn) {
        const { visible, children, onCloseClick } = this.props;
        return (
            <div className={ cn() }>
                <PopupContainerProvider>
                    <Popup
                        ref={ this.setRef }
                        visible={ visible }
                        size='m'
                        target='position'
                        height='available'
                        className={ cn('popup') }
                    >
                        <IconButton onClick={ onCloseClick } className={ cn('close') }>
                            <AlphaIcon size='m' />
                        </IconButton>
                        <div className={ cn('content') }>
                            { children }
                        </div>
                    </Popup>
                </PopupContainerProvider>
            </div>
        );
    }
}

export default PopupWrapper;
