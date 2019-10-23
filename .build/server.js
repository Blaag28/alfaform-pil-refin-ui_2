require("source-map-support").install();
// ignore attempts to require any types of assets
(() => {
    // simply ignore css files, it wont cause any damage
    const ignoreExtensions = [
        '.css'
    ];
    // warn about other requires, because it may lead to unexpected behaviour in production
    const warnExtensions = [
        '.gif',
        '.jpeg',
        '.jpg',
        '.ico',
        '.png',
        '.xml',
        '.svg',
        '.mp4',
        '.webm',
        '.ogv',
        '.aac',
        '.mp3',
        '.wav',
        '.ogg'
    ];
    const noop = () => {};
    const warn = (_, path) => console.warn(`\u001B[0;31mWARNING!
    Trying to require ${path} in node.js.
    Non-js files is ignored when required in node_modules\u001B[0m`);
    ignoreExtensions.forEach(e => require.extensions[e] = noop);
    warnExtensions.forEach(e => require.extensions[e] = warn);
})();

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/arui-feather/button/button.css":
/*!*****************************************************!*\
  !*** ./node_modules/arui-feather/button/button.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-feather/button/button.js":
/*!****************************************************!*\
  !*** ./node_modules/arui-feather/button/button.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _dec2, _class, _desc, _value, _class2, _class3, _temp2; /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                   * License, v. 2.0. If a copy of the MPL was not distributed with this
                                                                   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _autobind = __webpack_require__(/*! core-decorators/lib/autobind */ "core-decorators/lib/autobind");

var _autobind2 = _interopRequireDefault(_autobind);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cn = __webpack_require__(/*! ../cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

var _keyboardCode = __webpack_require__(/*! ../lib/keyboard-code */ "./node_modules/arui-feather/lib/keyboard-code.js");

var _keyboardCode2 = _interopRequireDefault(_keyboardCode);

var _performance = __webpack_require__(/*! ../performance */ "./node_modules/arui-feather/performance.js");

var _performance2 = _interopRequireDefault(_performance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

/**
 * Компонент кнопки (да, она нажимается!).
 */
var Button = (_dec = (0, _cn2.default)('button'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = (_class2 = (_temp2 = _class3 = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        var _temp, _this, _ret;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            focused: false,
            hovered: false,
            pressed: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * @type {HTMLButtonElement|HTMLSpanElement}
     */


    Button.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.disabled) {
            this.setState({
                hovered: false,
                focused: false
            });
        }
    };

    Button.prototype.render = function render(cn) {
        var _this2 = this;

        var isButton = this.props.tag !== 'span';

        var buttonProps = {
            ref: function ref(control) {
                _this2.control = control;
            },
            role: 'button',
            id: this.props.id,
            name: this.props.name,
            type: this.props.type,
            title: this.props.title,
            tabIndex: this.props.disabled ? '-1' : this.props.tabIndex,
            disabled: this.props.disabled,
            formNoValidate: isButton ? this.props.formNoValidate : null,
            className: cn({
                disabled: this.props.disabled,
                pseudo: this.props.pseudo,
                view: this.props.view,
                size: this.props.size,
                width: this.props.width,
                focused: this.props.focused !== undefined ? this.props.focused : this.state.focused,
                hovered: this.state.hovered,
                pressed: this.state.pressed,
                togglable: this.props.togglable,
                checked: this.props.checked
            }),
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onMouseOut: this.handleMouseOut,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            'data-test-id': this.props['data-test-id']
        };

        var buttonContent = [this.props.leftAddons && _react2.default.createElement(
            'span',
            { key: 'left-addons', className: cn('addon') },
            this.props.leftAddons
        ), (this.props.children || this.props.text || this.props.icon) && _react2.default.createElement(
            'span',
            { key: 'content', className: cn('content') },
            this.props.icon && _react2.default.createElement(
                'span',
                { key: 'icon', className: cn('icon') },
                this.props.icon
            ),
            (this.props.children || this.props.text) && _react2.default.createElement(
                'span',
                { key: 'text', className: cn('text') },
                this.props.children || this.props.text
            )
        ), this.props.rightAddons && _react2.default.createElement(
            'span',
            { key: 'right-addons', className: cn('addon') },
            this.props.rightAddons
        )];

        return isButton ? _react2.default.createElement(
            'button',
            buttonProps,
            buttonContent
        ) : _react2.default.createElement(
            'span',
            buttonProps,
            buttonContent
        );
    };

    Button.prototype.handleClick = function handleClick(event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    };

    Button.prototype.handleFocus = function handleFocus(event) {
        if (this.state.pressed) return;

        this.setState({ focused: true });

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    Button.prototype.handleBlur = function handleBlur(event) {
        this.setState({ focused: false });

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    Button.prototype.handleMouseEnter = function handleMouseEnter(event) {
        if (!this.props.disabled) {
            this.setState({ hovered: true });
        }

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    };

    Button.prototype.handleMouseLeave = function handleMouseLeave(event) {
        if (!this.props.disabled) {
            this.setState({ hovered: false });
        }

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    };

    Button.prototype.handleMouseDown = function handleMouseDown(event) {
        if (!this.props.disabled) {
            this.setState({ pressed: true });
        }

        if (this.props.onMouseDown) {
            this.props.onMouseDown(event);
        }
    };

    Button.prototype.handleMouseUp = function handleMouseUp(event) {
        if (!this.props.disabled) {
            this.setState({ pressed: false });
        }

        if (this.props.onMouseUp) {
            this.props.onMouseUp(event);
        }
    };

    Button.prototype.handleMouseOut = function handleMouseOut(event) {
        if (!this.props.disabled) {
            this.setState({ pressed: false });
        }

        if (this.props.onMouseOut) {
            this.props.onMouseOut(event);
        }
    };

    Button.prototype.handleKeyDown = function handleKeyDown(event) {
        if ((event.which === _keyboardCode2.default.ENTER || event.which === _keyboardCode2.default.SPACE) && !this.props.disabled) {
            this.setState({ pressed: true });
        }

        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
    };

    Button.prototype.handleKeyUp = function handleKeyUp(event) {
        if ((event.which === _keyboardCode2.default.ENTER || event.which === _keyboardCode2.default.SPACE) && !this.props.disabled) {
            this.setState({ pressed: false });
        }

        if (this.props.onKeyUp) {
            this.props.onKeyUp(event);
        }
    };

    /**
     * Возвращает корневой `HTMLElement` компонента.
     *
     * @public
     * @returns {HTMLElement}
     */


    Button.prototype.getNode = function getNode() {
        return this.control;
    };

    /**
     * Устанавливает фокус на поле ввода.
     *
     * @public
     */


    Button.prototype.focus = function focus() {
        this.control.focus();
    };

    /**
     * Убирает фокус с поля ввода.
     *
     * @public
     */


    Button.prototype.blur = function blur() {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    };

    return Button;
}(_react2.default.Component), _class3.defaultProps = {
    type: 'button',
    tag: 'button',
    size: 'm',
    formNoValidate: false
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleFocus', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleFocus'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleBlur', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleBlur'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseEnter', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseEnter'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseLeave', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseLeave'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseDown', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseDown'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseUp', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseUp'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseOut', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseOut'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleKeyDown', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleKeyDown'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleKeyUp', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleKeyUp'), _class2.prototype)), _class2)) || _class) || _class);
Button.propTypes = undefined !== "production" ? {
    /** Текст кнопки */
    text: _propTypes2.default.node,
    /** Иконка кнопки */
    icon: _propTypes2.default.node,
    /** Список произвольных элементов в левом слоте */
    rightAddons: _propTypes2.default.node,
    /** Список произвольных элементов в правом слоте */
    leftAddons: _propTypes2.default.node,
    /** Тип кнопки */
    view: _propTypes2.default.oneOf(['default', 'action', 'extra', 'rounded']),
    /** Поведение кнопки */
    type: _propTypes2.default.oneOf(['button', 'reset', 'submit']),
    /** HTML элемент, которым будет компонент в DOM */
    tag: _propTypes2.default.oneOf(['button', 'span']),
    /** Управление шириной кнопки. При значении 'available' растягивает кнопку на ширину родителя */
    width: _propTypes2.default.oneOf(['default', 'available']),
    /** Размер компонента */
    size: _propTypes2.default.oneOf(['s', 'm', 'l', 'xl']),
    /** Управление возможности взаимодействия с компонентом */
    disabled: _propTypes2.default.bool,
    /** Отображение кнопки в состоянии фокуса */
    focused: _propTypes2.default.bool,
    /** Псевдо представление кнопки */
    pseudo: _propTypes2.default.bool,
    /** Идентификатор компонента в DOM */
    id: _propTypes2.default.string,
    /** Отключает валидацию полей формы, у которых есть атрибут pattern */
    formNoValidate: _propTypes2.default.bool,
    /** Имя компонента в DOM */
    name: _propTypes2.default.string,
    /** Текст всплывающей подсказки */
    title: _propTypes2.default.string,
    /** Последовательность перехода между контролами при нажатии на Tab */
    tabIndex: _propTypes2.default.number,
    /** Тип переключателя */
    togglable: _propTypes2.default.oneOf(['check', 'radio']),
    /** Отображение кнопки в отмеченном (зажатом) состоянии */
    checked: _propTypes2.default.bool,
    /** Дочерние элементы `Button` */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    /** Идентификатор для систем автоматизированного тестирования */
    'data-test-id': _propTypes2.default.string,
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /**
     * Обработчик клика по кнопке
     * @param {React.MouseEvent} event
     */
    onClick: _propTypes2.default.func,
    /**
     * Обработчик фокуса кнопки
     * @param {React.FocusEvent} event
     */
    onFocus: _propTypes2.default.func,
    /**
     * Обработчик снятия фокуса кнопки
     * @param {React.FocusEvent} event
     */
    onBlur: _propTypes2.default.func,
    /**
     * Обработчик события наведения курсора на кнопку
     * @param {React.MouseEvent} event
     */
    onMouseEnter: _propTypes2.default.func,
    /**
     * Обработчик события снятия курсора с кнопки
     * @param {React.MouseEvent} event
     */
    onMouseLeave: _propTypes2.default.func,
    /**
     * Обработчик события нажатия кнопки мыши в момент
     * @param {React.MouseEvent} event
     */
    onMouseDown: _propTypes2.default.func,
    /**
     * Обработчик события отжатия кнопки мыши в момент
     * @param {React.MouseEvent} event
     */
    onMouseUp: _propTypes2.default.func,
    /**
     * Обработчик события отведения курсора с кнопки
     * @param {React.MouseEvent} event
     */
    onMouseOut: _propTypes2.default.func,
    /**
     * Обработчик события нажатия на клавишу клавиатуры в момент, когда фокус находится на компоненте
     * @param {React.KeyboardEvent} event
     */
    onKeyDown: _propTypes2.default.func,
    /**
     * Обработчик события отжатия на клавишу клавиатуры в момент, когда фокус находится на компоненте
     * @param {React.KeyboardEvent} event
     */
    onKeyUp: _propTypes2.default.func
} : {};
exports.default = Button;
//# sourceMappingURL=button.js.map


/***/ }),

/***/ "./node_modules/arui-feather/button/button_theme_alfa-on-color.css":
/*!*************************************************************************!*\
  !*** ./node_modules/arui-feather/button/button_theme_alfa-on-color.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-feather/button/button_theme_alfa-on-white.css":
/*!*************************************************************************!*\
  !*** ./node_modules/arui-feather/button/button_theme_alfa-on-white.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-feather/button/index.js":
/*!***************************************************!*\
  !*** ./node_modules/arui-feather/button/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! ./button.css */ "./node_modules/arui-feather/button/button.css");

__webpack_require__(/*! ./button_theme_alfa-on-color.css */ "./node_modules/arui-feather/button/button_theme_alfa-on-color.css");

__webpack_require__(/*! ./button_theme_alfa-on-white.css */ "./node_modules/arui-feather/button/button_theme_alfa-on-white.css");

var _button = __webpack_require__(/*! ./button */ "./node_modules/arui-feather/button/button.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

exports.default = _button2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-feather/cn.js":
/*!*****************************************!*\
  !*** ./node_modules/arui-feather/cn.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _cnDecorator = __webpack_require__(/*! cn-decorator */ "cn-decorator");

var _cnDecorator2 = _interopRequireDefault(_cnDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cnDecorator2.default.create(['alfa-on-white', 'alfa-on-color']); /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                                     * License, v. 2.0. If a copy of the MPL was not distributed with this
                                                                                     * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
//# sourceMappingURL=cn.js.map


/***/ }),

/***/ "./node_modules/arui-feather/heading/heading.css":
/*!*******************************************************!*\
  !*** ./node_modules/arui-feather/heading/heading.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-feather/heading/heading.js":
/*!******************************************************!*\
  !*** ./node_modules/arui-feather/heading/heading.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _dec2, _class, _class2, _temp; /* This Source Code Form is subject to the terms of the Mozilla Public
                                          * License, v. 2.0. If a copy of the MPL was not distributed with this
                                          * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cn = __webpack_require__(/*! ../cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

var _performance = __webpack_require__(/*! ../performance */ "./node_modules/arui-feather/performance.js");

var _performance2 = _interopRequireDefault(_performance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var HEADING_LEVEL = {
    xl: 1,
    l: 2,
    m: 3,
    s: 4,
    xs: 5
};

/**
 * Компонент заголовка.
 */
var Heading = (_dec = (0, _cn2.default)('heading'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Heading, _React$Component);

    function Heading() {
        _classCallCheck(this, Heading);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Heading.prototype.render = function render(cn) {
        var headingProps = {
            className: cn({
                size: this.props.size
            }),
            id: this.props.id,
            'data-test-id': this.props['data-test-id']
        };

        return _react2.default.createElement('h' + HEADING_LEVEL[this.props.size], headingProps, this.props.children);
    };

    return Heading;
}(_react2.default.Component), _class2.defaultProps = {
    size: 'xl'
}, _temp)) || _class) || _class);
Heading.propTypes = undefined !== "production" ? {
    /** Дочерние элементы `Heading` */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    /** Размер, определяющий какой тег заголовка будет использоваться */
    size: _propTypes2.default.oneOf(['xs', 's', 'm', 'l', 'xl']),
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Идентификатор компонента в DOM */
    id: _propTypes2.default.string,
    /** Идентификатор для систем автоматизированного тестирования */
    'data-test-id': _propTypes2.default.string
} : {};
exports.default = Heading;
//# sourceMappingURL=heading.js.map


/***/ }),

/***/ "./node_modules/arui-feather/heading/index.js":
/*!****************************************************!*\
  !*** ./node_modules/arui-feather/heading/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! ./heading.css */ "./node_modules/arui-feather/heading/heading.css");

var _heading = __webpack_require__(/*! ./heading */ "./node_modules/arui-feather/heading/heading.js");

var _heading2 = _interopRequireDefault(_heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

exports.default = _heading2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-feather/label/index.js":
/*!**************************************************!*\
  !*** ./node_modules/arui-feather/label/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! ./label.css */ "./node_modules/arui-feather/label/label.css");

var _label = __webpack_require__(/*! ./label */ "./node_modules/arui-feather/label/label.js");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

exports.default = _label2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-feather/label/label.css":
/*!***************************************************!*\
  !*** ./node_modules/arui-feather/label/label.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-feather/label/label.js":
/*!**************************************************!*\
  !*** ./node_modules/arui-feather/label/label.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _dec2, _class, _class2, _temp; /* This Source Code Form is subject to the terms of the Mozilla Public
                                          * License, v. 2.0. If a copy of the MPL was not distributed with this
                                          * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cn = __webpack_require__(/*! ../cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

var _performance = __webpack_require__(/*! ../performance */ "./node_modules/arui-feather/performance.js");

var _performance2 = _interopRequireDefault(_performance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Компонента лейбла.
 */
var Label = (_dec = (0, _cn2.default)('label'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Label, _React$Component);

    function Label() {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Label.prototype.render = function render(cn) {
        return _react2.default.createElement(
            'span',
            {
                className: cn({
                    size: this.props.size,
                    'no-wrap': this.props.isNoWrap
                }),
                id: this.props.id,
                'data-test-id': this.props['data-test-id']
            },
            _react2.default.createElement(
                'span',
                { className: cn('inner') },
                this.props.children
            )
        );
    };

    return Label;
}(_react2.default.Component), _class2.defaultProps = {
    size: 'm',
    isNoWrap: false
}, _temp)) || _class) || _class);
Label.propTypes = undefined !== "production" ? {
    /** Размер компонента */
    size: _propTypes2.default.oneOf(['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl']),
    /** Дочерние элементы `Label` */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Идентификатор компонента в DOM */
    id: _propTypes2.default.string,
    /** Управление возможностью рендерить компонент в одну сроку */
    isNoWrap: _propTypes2.default.bool,
    /** Идентификатор для систем автоматизированного тестирования */
    'data-test-id': _propTypes2.default.string
} : {};
exports.default = Label;
//# sourceMappingURL=label.js.map


/***/ }),

/***/ "./node_modules/arui-feather/lib/keyboard-code.js":
/*!********************************************************!*\
  !*** ./node_modules/arui-feather/lib/keyboard-code.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

exports.default = {
    SPACE: 32,
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE_BREAK: 19,
    CAPS_LOCK: 20,
    ESCAPE: 27,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    INSERT: 45,
    DELETE: 46,
    NUMBER_0: 48,
    NUMBER_1: 49,
    NUMBER_2: 50,
    NUMBER_3: 51,
    NUMBER_4: 52,
    NUMBER_5: 53,
    NUMBER_6: 54,
    NUMBER_7: 55,
    NUMBER_8: 56,
    NUMBER_9: 57,
    LETTER_A: 65,
    LETTER_B: 66,
    LETTER_C: 67,
    LETTER_D: 68,
    LETTER_E: 69,
    LETTER_F: 70,
    LETTER_G: 71,
    LETTER_H: 72,
    LETTER_I: 73,
    LETTER_J: 74,
    LETTER_K: 75,
    LETTER_L: 76,
    LETTER_M: 77,
    LETTER_N: 78,
    LETTER_O: 79,
    LETTER_P: 80,
    LETTER_Q: 81,
    LETTER_R: 82,
    LETTER_S: 83,
    LETTER_T: 84,
    LETTER_U: 85,
    LETTER_V: 86,
    LETTER_W: 87,
    LETTER_X: 88,
    LETTER_Y: 89,
    LETTER_Z: 90,
    LEFT_WINDOW_KEY: 91,
    RIGHT_WINDOW_KEY: 92,
    SELECT_KEY: 93,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBTRACT: 109,
    DECIMALPOINT: 110,
    DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145,
    SEMI_COLON: 186,
    EQUAL_SIGN: 187,
    COMMA: 188,
    DASH: 189,
    PERIOD: 190,
    FORWARD_SLASH: 191,
    GRAVE_ACCENT: 192,
    OPEN_BRACKET: 219,
    BACK_SLASH: 220,
    CLOSE_BRACKET: 221,
    SINGLE_QUOTE: 222
};
//# sourceMappingURL=keyboard-code.js.map


/***/ }),

/***/ "./node_modules/arui-feather/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arui-feather/link/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! ./link.css */ "./node_modules/arui-feather/link/link.css");

var _link = __webpack_require__(/*! ./link */ "./node_modules/arui-feather/link/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

exports.default = _link2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-feather/link/link.css":
/*!*************************************************!*\
  !*** ./node_modules/arui-feather/link/link.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-feather/link/link.js":
/*!************************************************!*\
  !*** ./node_modules/arui-feather/link/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _dec2, _class, _desc, _value, _class2, _class3, _temp2; /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                   * License, v. 2.0. If a copy of the MPL was not distributed with this
                                                                   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _autobind = __webpack_require__(/*! core-decorators/lib/autobind */ "core-decorators/lib/autobind");

var _autobind2 = _interopRequireDefault(_autobind);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cn = __webpack_require__(/*! ../cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

var _performance = __webpack_require__(/*! ../performance */ "./node_modules/arui-feather/performance.js");

var _performance2 = _interopRequireDefault(_performance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

/**
 * Компонент ссылки.
 */
var Link = (_dec = (0, _cn2.default)('link'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = (_class2 = (_temp2 = _class3 = function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link() {
        var _temp, _this, _ret;

        _classCallCheck(this, Link);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            hovered: false,
            focused: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Link.prototype.render = function render(cn) {
        var _this2 = this;

        var linkElement = this.props.checked || this.props.disabled ? 'span' : 'a';
        var iconPosition = this.props.iconPosition;


        var linkProps = {
            ref: function ref(root) {
                _this2.root = root;
            },
            download: this.props.download,
            className: cn({
                disabled: this.props.disabled,
                checked: this.props.checked,
                pseudo: this.props.pseudo,
                size: this.props.size,
                focused: this.state.focused,
                hovered: this.state.hovered,
                flex: this.props.icon && iconPosition === 'left'
            }),
            id: this.props.id,
            tabIndex: this.props.tabIndex,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            'data-test-id': this.props['data-test-id']
        };

        if (this.props.target === '_blank') {
            linkProps.rel = 'noreferrer noopener';
        }

        if (!this.props.checked && !this.props.disabled) {
            linkProps.href = this.props.url;
            linkProps.target = this.props.target;
        }

        var linkContent = [this.props.children];
        var iconTemplate = this.props.icon && _react2.default.createElement(
            'span',
            { key: 'icon', className: cn('icon', { left: iconPosition === 'left' }) },
            this.props.icon
        );

        var textTemplate = this.props.text && _react2.default.createElement(
            'span',
            { key: 'text', className: cn('text-container') },
            _react2.default.createElement(
                'span',
                { className: cn('text') },
                this.props.text
            )
        );

        if (iconPosition === 'left') {
            linkContent.push(iconTemplate, textTemplate);
        }
        if (iconPosition === 'right') {
            linkContent.push(textTemplate, iconTemplate);
        }

        return _react2.default.createElement(linkElement, linkProps, linkContent);
    };

    Link.prototype.handleClick = function handleClick(event) {
        if (this.props.pseudo) {
            event.preventDefault();
        }
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick(event);
        }

        if (this.props.disabled && this.props.onDisabledClick) {
            this.props.onDisabledClick(event);
        }
    };

    Link.prototype.handleFocus = function handleFocus(event) {
        this.setState({ focused: true });

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    Link.prototype.handleBlur = function handleBlur(event) {
        this.setState({ focused: false });

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    Link.prototype.handleMouseEnter = function handleMouseEnter(event) {
        this.setState({ hovered: true });

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    };

    Link.prototype.handleMouseLeave = function handleMouseLeave(event) {
        this.setState({ hovered: false });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    };

    /**
     * Возвращает корневой `HTMLElement` компонента.
     *
     * @public
     * @returns {HTMLElement}
     */


    Link.prototype.getNode = function getNode() {
        return this.root;
    };

    /**
     * Ставит фокус на ссылку.
     *
     * @public
     */


    Link.prototype.focus = function focus() {
        this.root.focus();
    };

    /**
     * Убирает фокус с ссылки.
     *
     * @public
     */


    Link.prototype.blur = function blur() {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    };

    return Link;
}(_react2.default.Component), _class3.defaultProps = {
    iconPosition: 'left',
    size: 'm',
    url: '#',
    tabIndex: 0,
    disabled: false,
    checked: false,
    pseudo: false
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleFocus', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleFocus'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleBlur', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleBlur'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseEnter', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseEnter'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseLeave', [_autobind2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseLeave'), _class2.prototype)), _class2)) || _class) || _class);
Link.propTypes = undefined !== "production" ? {
    /** Иконка ссылки */
    icon: _propTypes2.default.node,
    /** Позиционирование иконки в ссылке */
    iconPosition: _propTypes2.default.oneOf(['left', 'right']),
    /** Текст ссылки */
    text: _propTypes2.default.node,
    /** href ссылки */
    url: _propTypes2.default.string,
    /** Указание на загрузку, вместо открытия и указание имени файла  */
    download: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /** target ссылки */
    target: _propTypes2.default.oneOf(['_self', '_blank', '_parent', '_top']),
    /** Последовательность перехода между контролами при нажатии на Tab */
    tabIndex: _propTypes2.default.number,
    /** Управление возможностью клика по ссылке */
    disabled: _propTypes2.default.bool,
    /** Управление состоянием ссылки выбран/не выбран */
    checked: _propTypes2.default.bool,
    /** Псевдо-ссылка (border-bottom: dashed) */
    pseudo: _propTypes2.default.bool,
    /** Размер компонента */
    size: _propTypes2.default.oneOf(['xs', 's', 'm', 'l', 'xl']),
    /** Дочерние элементы `Link` */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Идентификатор компонента в DOM */
    id: _propTypes2.default.string,
    /**
     * Обработчик клика но ссылке
     * @param {React.MouseEvent} event
     */
    onClick: _propTypes2.default.func,
    /**
     * Обработчик фокуса компонента
     * @param {React.FocusEvent} event
     */
    onFocus: _propTypes2.default.func,
    /**
     * Обработчик снятия фокуса компонента
     * @param {React.FocusEvent} event
     */
    onBlur: _propTypes2.default.func,
    /**
     * Обработчик события наведения курсора на ссылку
     * @param {React.MouseEvent} event
     */
    onMouseEnter: _propTypes2.default.func,
    /**
     * Обработчик события снятия курсора с ссылки
     * @param {React.MouseEvent} event
     */
    onMouseLeave: _propTypes2.default.func,
    /**
     * Обработчик клика по disabled ссылке
     */
    onDisabledClick: _propTypes2.default.func,
    /** Идентификатор для систем автоматизированного тестирования */
    'data-test-id': _propTypes2.default.string
} : {};
exports.default = Link;
//# sourceMappingURL=link.js.map


/***/ }),

/***/ "./node_modules/arui-feather/paragraph/index.js":
/*!******************************************************!*\
  !*** ./node_modules/arui-feather/paragraph/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! ./paragraph.css */ "./node_modules/arui-feather/paragraph/paragraph.css");

var _paragraph = __webpack_require__(/*! ./paragraph */ "./node_modules/arui-feather/paragraph/paragraph.js");

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

exports.default = _paragraph2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-feather/paragraph/paragraph.css":
/*!***********************************************************!*\
  !*** ./node_modules/arui-feather/paragraph/paragraph.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-feather/paragraph/paragraph.js":
/*!**********************************************************!*\
  !*** ./node_modules/arui-feather/paragraph/paragraph.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _dec2, _class; /* This Source Code Form is subject to the terms of the Mozilla Public
                          * License, v. 2.0. If a copy of the MPL was not distributed with this
                          * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cn = __webpack_require__(/*! ../cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

var _performance = __webpack_require__(/*! ../performance */ "./node_modules/arui-feather/performance.js");

var _performance2 = _interopRequireDefault(_performance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Компонент параграфа текста.
 */
var Paragraph = (_dec = (0, _cn2.default)('paragraph'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = function (_React$Component) {
    _inherits(Paragraph, _React$Component);

    function Paragraph() {
        _classCallCheck(this, Paragraph);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Paragraph.prototype.render = function render(cn) {
        return _react2.default.createElement(
            'p',
            {
                className: cn({ view: this.props.view }),
                id: this.props.id,
                'data-test-id': this.props['data-test-id']
            },
            this.props.mark && _react2.default.createElement(
                'span',
                { className: cn('marker') },
                this.props.mark
            ),
            this.props.children
        );
    };

    return Paragraph;
}(_react2.default.Component)) || _class) || _class);
Paragraph.propTypes = undefined !== "production" ? {
    /** Тип параграфа */
    view: _propTypes2.default.oneOf(['lead', 'normal', 'small']),
    /** Маркер параграфа */
    mark: _propTypes2.default.node,
    /** Дочерние элементы `Paragraph` */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Идентификатор компонента в DOM */
    id: _propTypes2.default.string,
    /** Идентификатор для систем автоматизированного тестирования */
    'data-test-id': _propTypes2.default.string
} : {};
exports.default = Paragraph;
//# sourceMappingURL=paragraph.js.map


/***/ }),

/***/ "./node_modules/arui-feather/performance.js":
/*!**************************************************!*\
  !*** ./node_modules/arui-feather/performance.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                                                                                                                                                                                                                               * License, v. 2.0. If a copy of the MPL was not distributed with this
                                                                                                                                                                                                                                                                               * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

exports.isEqual = isEqual;
exports.default = performance;

var _react = __webpack_require__(/*! react */ "react");

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Функции проверки равенства двух объектов.
 *
 * @param {*} objA Первый объект
 * @param {*} objB Второй объект
 * @param {Boolean} [deep=false] Запускать ли глубокую проверку равенства
 * @returns {Boolean}
 */

function isEqual(objA, objB) {
    var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (Object.is(objA, objB)) {
        return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
        return false;
    }

    if (objA.prototype !== objB.prototype) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = hasOwnProperty.bind(objB);
    while (keysA.length > 0) {
        var key = keysA.pop();

        if (!bHasOwnProperty(key)) {
            return false;
        }

        var a = objA[key];
        var b = objB[key];

        if (!Object.is(a, b)) {
            if (!deep || (typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object' || a === null || b === null) {
                return false;
            }

            // https://github.com/erikras/redux-form/issues/3461
            // https://github.com/erikras/redux-form/pull/3481
            if ((0, _react.isValidElement)(a) || (0, _react.isValidElement)(b)) return false;

            if (!isEqual(a, b, deep)) {
                return false;
            }
        }
    }

    return true;
}

/**
 * Поверхностная проверка равенства props и state компонента.
 *
 * @param {*} nextProps next component props
 * @param {*} nextState next component state
 * @param {*} nextContext next component context
 * @returns {Boolean}
 */
function shallow(nextProps, nextState, nextContext) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState) || !isEqual(this.context, nextContext);
}

/**
 * Запускает глубокую проверку равенства props и state компонента.
 * Глубокая проверка менее производительна, но позволяет проверять равенство массивов и объектов.
 *
 * @param {*} nextProps next component props
 * @param {*} nextState next component state
 * @param {*} nextContext next component context
 * @returns {Boolean}
 */
function deep(nextProps, nextState, nextContext) {
    return !isEqual(this.props, nextProps, true) || !isEqual(this.state, nextState, true) || !isEqual(this.context, nextContext, true);
}

/**
 * Декоратор для улучшения производительности React компонентов. Работает за счет реализации метода
 * [shouldComponentUpdate](https://facebook.github.io/react/docs/advanced-performance.html#avoiding-reconciling-the-dom)
 *
 * У декоратора есть два режима работы - глубокая и "поверхностная" проверка. В случае, если все props и state
 * компонента состоит только из примитивных значений (`number`, `string`, `null`, `undefined`) стоит использовать
 * поверхностную проверку, которая будет проверять простое равенство значений в `props` и `state`.

 * В случае, если props или state компонентов имеют сложную структуру (массивы, объекты) необходимо использовать
 * глубокую проверку.
 *
 * @param {Boolean} [useDeep=false] Использовать глубокую проверку равенства
 * @returns {Function}
 */
function performance() {
    var useDeep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return function (target) {
        target.prototype.shouldComponentUpdate = useDeep ? deep : shallow;
    };
}
//# sourceMappingURL=performance.js.map


/***/ }),

/***/ "./node_modules/arui-feather/theme-provider/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/arui-feather/theme-provider/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _themeProvider = __webpack_require__(/*! ./theme-provider */ "./node_modules/arui-feather/theme-provider/theme-provider.js");

var _themeProvider2 = _interopRequireDefault(_themeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _themeProvider2.default; /* This Source Code Form is subject to the terms of the Mozilla Public
                                            * License, v. 2.0. If a copy of the MPL was not distributed with this
                                            * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-feather/theme-provider/theme-provider.js":
/*!********************************************************************!*\
  !*** ./node_modules/arui-feather/theme-provider/theme-provider.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _class, _temp; /* This Source Code Form is subject to the terms of the Mozilla Public
                    * License, v. 2.0. If a copy of the MPL was not distributed with this
                    * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Компонент задающий тему для своих дочерних компонентов.
 * Важно! Может содержать в себе строго один дочерний компонент.
 */
var ThemeProvider = (_temp = _class = function (_React$Component) {
    _inherits(ThemeProvider, _React$Component);

    function ThemeProvider() {
        _classCallCheck(this, ThemeProvider);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    ThemeProvider.prototype.getChildContext = function getChildContext() {
        return {
            theme: this.props.theme
        };
    };

    ThemeProvider.prototype.render = function render() {
        return _react2.default.Children.only(this.props.children);
    };

    return ThemeProvider;
}(_react2.default.Component), _class.contextTypes = {
    theme: _propTypes2.default.string
}, _class.childContextTypes = {
    theme: _propTypes2.default.string
}, _temp);
ThemeProvider.propTypes = undefined !== "production" ? {
    /** Дочерний элемент `ThemeProvider` */
    children: _propTypes2.default.node,
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white'])
} : {};
exports.default = ThemeProvider;
//# sourceMappingURL=theme-provider.js.map


/***/ }),

/***/ "./node_modules/arui-private/copyright/copyright.css":
/*!***********************************************************!*\
  !*** ./node_modules/arui-private/copyright/copyright.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-private/copyright/copyright.js":
/*!**********************************************************!*\
  !*** ./node_modules/arui-private/copyright/copyright.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = __webpack_require__(/*! arui-feather/link/link */ "./node_modules/arui-feather/link/link.js");

var _link2 = _interopRequireDefault(_link);

var _cn = __webpack_require__(/*! arui-feather/cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

var _performance = __webpack_require__(/*! arui-feather/performance */ "./node_modules/arui-feather/performance.js");

var _performance2 = _interopRequireDefault(_performance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Компонент копирайта: отображает данные о лицензии Альфа-Банка.
 */
var Copyright = (_dec = (0, _cn2.default)('copyright'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Copyright, _React$Component);

    function Copyright() {
        _classCallCheck(this, Copyright);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Copyright.prototype.render = function render(cn) {
        return _react2.default.createElement(
            'div',
            { className: cn(), id: this.props.id },
            this.props.children || this.renderDefaultCopyright(cn)
        );
    };

    Copyright.prototype.renderDefaultCopyright = function renderDefaultCopyright(cn) {
        var getCurrentYear = new Date().getFullYear();
        return _react2.default.createElement(
            'span',
            null,
            this.props.showYears && _react2.default.createElement(
                'span',
                { className: cn('years') },
                this.renderCopyrightSymbol(cn),
                ' ',
                '2001\u2014' + getCurrentYear + ' ',
                _react2.default.createElement(_link2.default, { size: 's', url: 'https://alfabank.ru/', text: '\u0410\u043B\u044C\u0444\u0430-\u0411\u0430\u043D\u043A' }),
                '.',
                ' '
            ),
            _react2.default.createElement(
                'nobr',
                null,
                '\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0426\u0411 \u0420\u0424 \u21161326.'
            )
        );
    };

    Copyright.prototype.renderCopyrightSymbol = function renderCopyrightSymbol(cn) {
        var copyrightSymbolProps = {
            className: cn('symbol')
        };

        if (this.props.version) {
            copyrightSymbolProps['data-version'] = this.props.version;
        }

        return _react2.default.createElement(
            'span',
            _extends({ role: 'img', 'aria-label': 'Copyright' }, copyrightSymbolProps),
            '\xA9'
        );
    };

    return Copyright;
}(_react2.default.Component), _class2.defaultProps = {
    showYears: true
}, _temp)) || _class) || _class);
Copyright.propTypes = undefined !== "production" ? {
    /** Отображение годов */
    showYears: _propTypes2.default.bool,
    /** Дочерние элементы `Copyright`, заменяют собой стандартный текст copyright'а */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Уникальный идентификатор блока */
    id: _propTypes2.default.string,
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Версия приложения, отображается при наведении курсора на значок © */
    version: _propTypes2.default.string
} : {};
exports.default = Copyright;
//# sourceMappingURL=copyright.js.map


/***/ }),

/***/ "./node_modules/arui-private/copyright/index.js":
/*!******************************************************!*\
  !*** ./node_modules/arui-private/copyright/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! arui-feather/link */ "./node_modules/arui-feather/link/index.js");

__webpack_require__(/*! ./copyright.css */ "./node_modules/arui-private/copyright/copyright.css");

var _copyright = __webpack_require__(/*! ./copyright */ "./node_modules/arui-private/copyright/copyright.js");

var _copyright2 = _interopRequireDefault(_copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _copyright2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-private/error-page/error-page.css":
/*!*************************************************************!*\
  !*** ./node_modules/arui-private/error-page/error-page.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-private/error-page/error-page.js":
/*!************************************************************!*\
  !*** ./node_modules/arui-private/error-page/error-page.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class, _class2, _temp; /* eslint-disable react/no-danger */

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cn = __webpack_require__(/*! arui-feather/cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

var _link = __webpack_require__(/*! arui-feather/link/link */ "./node_modules/arui-feather/link/link.js");

var _link2 = _interopRequireDefault(_link);

var _heading = __webpack_require__(/*! arui-feather/heading/heading */ "./node_modules/arui-feather/heading/heading.js");

var _heading2 = _interopRequireDefault(_heading);

var _label = __webpack_require__(/*! arui-feather/label/label */ "./node_modules/arui-feather/label/label.js");

var _label2 = _interopRequireDefault(_label);

var _button = __webpack_require__(/*! arui-feather/button/button */ "./node_modules/arui-feather/button/button.js");

var _button2 = _interopRequireDefault(_button);

var _paragraph = __webpack_require__(/*! arui-feather/paragraph/paragraph */ "./node_modules/arui-feather/paragraph/paragraph.js");

var _paragraph2 = _interopRequireDefault(_paragraph);

var _footer = __webpack_require__(/*! ../footer/footer */ "./node_modules/arui-private/footer/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _page = __webpack_require__(/*! ../page/page */ "./node_modules/arui-private/page/page.js");

var _page2 = _interopRequireDefault(_page);

var _formatters = __webpack_require__(/*! ../lib/formatters */ "./node_modules/arui-private/lib/formatters.js");

var _errorCodes = __webpack_require__(/*! ../lib/error-codes */ "./node_modules/arui-private/lib/error-codes.js");

var _errorCodes2 = _interopRequireDefault(_errorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Компонент страницы ошибки.
 * Как правило является корневым компонентом страницы.
 * Используется вместо компонента Page.
 * @extends Page
 */
var ErrorPage = (_dec = (0, _cn2.default)('error-page'), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(ErrorPage, _React$Component);

    function ErrorPage() {
        _classCallCheck(this, ErrorPage);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    ErrorPage.prototype.componentDidMount = function componentDidMount() {
        if (this.props.onDidMount) {
            this.props.onDidMount();
        }
    };

    ErrorPage.prototype.render = function render(cn) {
        var _props = this.props,
            header = _props.header,
            footer = _props.footer,
            id = _props.id,
            title = _props.title,
            errorCode = _props.errorCode,
            text = _props.text,
            returnUrl = _props.returnUrl,
            returnTitle = _props.returnTitle,
            traceId = _props.traceId;


        return _react2.default.createElement(
            _page2.default,
            {
                header: header,
                footer: footer || _react2.default.createElement(_footer2.default, { className: cn('footer') }),
                hasOffset: false
            },
            _react2.default.createElement(
                'div',
                { className: cn(), id: id },
                _react2.default.createElement(
                    'div',
                    { className: cn('content') },
                    _react2.default.createElement(
                        'div',
                        { className: cn('top') },
                        _react2.default.createElement('div', { className: cn('icon') }),
                        _react2.default.createElement(
                            _heading2.default,
                            { className: cn('title'), size: 'l' },
                            _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: title || _errorCodes2.default[errorCode].title } })
                        ),
                        _react2.default.createElement(
                            _paragraph2.default,
                            { className: cn('text') },
                            _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: text || _errorCodes2.default[errorCode].text } })
                        ),
                        returnUrl && _react2.default.createElement(
                            _link2.default,
                            {
                                url: returnUrl,
                                className: cn('return-link')
                            },
                            _react2.default.createElement(
                                _button2.default,
                                null,
                                returnTitle
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: cn('bottom') },
                        traceId ? _react2.default.createElement(
                            _label2.default,
                            { className: cn('trace-id'), size: 'm' },
                            '\u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ',
                            (0, _formatters.formatTraceId)(traceId)
                        ) : null,
                        _react2.default.createElement(
                            'div',
                            { className: cn('contacts') },
                            _react2.default.createElement(
                                _label2.default,
                                { size: 'm' },
                                '\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438\xA0\u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 24/7'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: cn('contacts-wrapper') },
                                _react2.default.createElement(
                                    'div',
                                    { className: cn('contacts-item', { main: true }) },
                                    _react2.default.createElement(
                                        _link2.default,
                                        { url: 'tel:+74957555858', size: 'l' },
                                        '+7 495 755 58 58'
                                    ),
                                    _react2.default.createElement(
                                        _label2.default,
                                        { size: 's' },
                                        '\u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u0438 \u0437\u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u0435\u0439'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: cn('contacts-item', { other: true }) },
                                    _react2.default.createElement(
                                        _link2.default,
                                        { url: 'tel:88001007733', size: 'l' },
                                        '8 800 100 77 33'
                                    ),
                                    _react2.default.createElement(
                                        _label2.default,
                                        { size: 's' },
                                        '\u0432 \u043B\u044E\u0431\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435 \u0420\u043E\u0441\u0441\u0438\u0438'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    };

    return ErrorPage;
}(_react2.default.Component), _class2.defaultProps = {
    errorCode: 500,
    returnTitle: 'Перейти на главную'
}, _temp)) || _class);
exports.default = ErrorPage;
ErrorPage.propTypes = undefined !== "production" ? {
    /** Заголовок ошибки */
    title: _propTypes2.default.string,
    /** Сообщение ошибки */
    text: _propTypes2.default.string,
    /** Код ошибки */
    errorCode: _propTypes2.default.oneOf([500, 404]),
    /** Шапка страницы */
    header: _propTypes2.default.node,
    /** Подвал страницы */
    footer: _propTypes2.default.node,
    /** href для ссылки 'Вернуться в интернет-банк' */
    returnUrl: _propTypes2.default.string,
    /** TraceId запроса на котором произошла ошибка */
    traceId: _propTypes2.default.string,
    /** Альтернативный текст для ссылки 'Вернуться в интернет-банк' */
    returnTitle: _propTypes2.default.string,
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Уникальный идентификатор блока */
    id: _propTypes2.default.string,
    /** Событие отрисовки страницы */
    onDidMount: _propTypes2.default.func
} : {};
//# sourceMappingURL=error-page.js.map


/***/ }),

/***/ "./node_modules/arui-private/error-page/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/arui-private/error-page/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! arui-feather/link */ "./node_modules/arui-feather/link/index.js");

__webpack_require__(/*! arui-feather/heading */ "./node_modules/arui-feather/heading/index.js");

__webpack_require__(/*! arui-feather/label */ "./node_modules/arui-feather/label/index.js");

__webpack_require__(/*! arui-feather/button */ "./node_modules/arui-feather/button/index.js");

__webpack_require__(/*! arui-feather/paragraph */ "./node_modules/arui-feather/paragraph/index.js");

__webpack_require__(/*! ../footer */ "./node_modules/arui-private/footer/index.js");

__webpack_require__(/*! ../page */ "./node_modules/arui-private/page/index.js");

__webpack_require__(/*! ./error-page.css */ "./node_modules/arui-private/error-page/error-page.css");

var _errorPage = __webpack_require__(/*! ./error-page */ "./node_modules/arui-private/error-page/error-page.js");

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _errorPage2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-private/footer/footer.css":
/*!*****************************************************!*\
  !*** ./node_modules/arui-private/footer/footer.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-private/footer/footer.js":
/*!****************************************************!*\
  !*** ./node_modules/arui-private/footer/footer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cn = __webpack_require__(/*! arui-feather/cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

var _performance = __webpack_require__(/*! arui-feather/performance */ "./node_modules/arui-feather/performance.js");

var _performance2 = _interopRequireDefault(_performance);

var _themeProvider = __webpack_require__(/*! arui-feather/theme-provider */ "./node_modules/arui-feather/theme-provider/index.js");

var _themeProvider2 = _interopRequireDefault(_themeProvider);

var _copyright = __webpack_require__(/*! ../copyright/copyright */ "./node_modules/arui-private/copyright/copyright.js");

var _copyright2 = _interopRequireDefault(_copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Компонент подвала сайта.
 * Обычно используется совместно с компонентом `Page`.
 */
var Footer = (_dec = (0, _cn2.default)('footer'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Footer.prototype.render = function render(cn) {
        return _react2.default.createElement(
            'div',
            { className: cn(), id: this.props.id },
            _react2.default.createElement(
                _themeProvider2.default,
                { theme: this.props.theme },
                _react2.default.createElement(
                    'div',
                    { className: cn('sub') },
                    this.props.copyright || _react2.default.createElement(_copyright2.default, {
                        showYears: this.props.showYears,
                        version: this.props.version
                    })
                )
            )
        );
    };

    return Footer;
}(_react2.default.Component), _class2.defaultProps = {
    showYears: true,
    theme: 'alfa-on-white'
}, _temp)) || _class) || _class);
Footer.propTypes = undefined !== "production" ? {
    /** Содержимое блока копирайта */
    copyright: _propTypes2.default.node,
    /** Отображение годов в копирайте */
    showYears: _propTypes2.default.bool,
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Уникальный идентификатор блока */
    id: _propTypes2.default.string,
    /** Версия приложения, отображается при наведении курсора на значок © */
    version: _propTypes2.default.string
} : {};
exports.default = Footer;
//# sourceMappingURL=footer.js.map


/***/ }),

/***/ "./node_modules/arui-private/footer/index.js":
/*!***************************************************!*\
  !*** ./node_modules/arui-private/footer/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! ../copyright */ "./node_modules/arui-private/copyright/index.js");

__webpack_require__(/*! ./footer.css */ "./node_modules/arui-private/footer/footer.css");

var _footer = __webpack_require__(/*! ./footer */ "./node_modules/arui-private/footer/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _footer2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-private/lib/currency-codes.js":
/*!*********************************************************!*\
  !*** ./node_modules/arui-private/lib/currency-codes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CURRENCY_MAP = {
    ALL: '\u004c\u0065\u006b',
    AFN: '\u060b',
    ARS: '\u0024',
    AWG: '\u0192',
    AUD: '\u0024',
    AZN: '\u20bc',
    BSD: '\u0024',
    BBD: '\u0024',
    BYR: '\u0042\u0072',
    BZD: '\u0042\u005a\u0024',
    BMD: '\u0024',
    BOB: '\u0024\u0062',
    BAM: '\u004b\u004d',
    BWP: '\u0050',
    BGN: '\u043b\u0432',
    BRL: '\u0052\u0024',
    BND: '\u0024',
    KHR: '\u17db',
    CAD: '\u0024',
    KYD: '\u0024',
    CLP: '\u0024',
    CNY: '\u00a5',
    COP: '\u0024',
    CRC: '\u20a1',
    HRK: '\u006b\u006e',
    CUP: '\u20b1',
    CZK: '\u004b\u010d',
    DKK: '\u006b\u0072',
    DOP: '\u0052\u0044\u0024',
    XCD: '\u0024',
    EGP: '\u00a3',
    SVC: '\u0024',
    EEK: '\u006b\u0072',
    EUR: '\u20ac',
    FKP: '\u00a3',
    FJD: '\u0024',
    FRF: '\u20a3',
    GHC: '\u00a2',
    GIP: '\u00a3',
    GTQ: '\u0051',
    GGP: '\u00a3',
    GYD: '\u0024',
    HNL: '\u004c',
    HKD: '\u0024',
    HUF: '\u0046\u0074',
    ISK: '\u006b\u0072',
    INR: '\u20a8',
    IDR: '\u0052\u0070',
    IRR: '\ufdfc',
    IMP: '\u00a3',
    ILS: '\u20aa',
    JMD: '\u004a\u0024',
    JPY: '\u00a5',
    JEP: '\u00a3',
    KZT: '\u043b\u0432',
    KGS: '\u043b\u0432',
    LAK: '\u20ad',
    LVL: '\u004c\u0073',
    LBP: '\u00a3',
    LRD: '\u0024',
    LTL: '\u004c\u0074',
    MKD: '\u0434\u0435\u043d',
    MYR: '\u0052\u004d',
    MUR: '\u20a8',
    MXN: '\u0024',
    MNT: '\u20ae',
    MZN: '\u004d\u0054',
    NAD: '\u0024',
    NPR: '\u20a8',
    ANG: '\u0192',
    NZD: '\u0024',
    NIO: '\u0043\u0024',
    NGN: '\u20a6',
    KPW: '\u20a9',
    NOK: '\u006b\u0072',
    OMR: '\ufdfc',
    PKR: '\u20a8',
    PAB: '\u0042\u002f\u002e',
    PYG: '\u0047\u0073',
    PEN: '\u0053\u002f\u002e',
    PHP: '\u20b1',
    PLN: '\u007a\u0142',
    QAR: '\ufdfc',
    RON: '\u006c\u0065\u0069',
    RUR: '\u20bd',
    SHP: '\u00a3',
    SAR: '\ufdfc',
    RSD: '\u0414\u0438\u043d\u002e',
    SCR: '\u20a8',
    SGD: '\u0024',
    SBD: '\u0024',
    SOS: '\u0053',
    ZAR: '\u0052',
    KRW: '\u20a9',
    LKR: '\u20a8',
    SEK: '\u006b\u0072',
    CHF: '\u0043\u0048\u0046',
    SRD: '\u0024',
    SYP: '\u00a3',
    TWD: '\u004e\u0054\u0024',
    THB: '\u0e3f',
    TTD: '\u0054\u0054\u0024',
    TRY: '\u20a4',
    TRL: '\u20a4',
    TVD: '\u0024',
    UAH: '\u20b4',
    GBP: '\u00a3',
    USD: '\u0024',
    UYU: '\u0024\u0055',
    UZS: '\u043b\u0432',
    VEF: '\u0042\u0073',
    VND: '\u20ab',
    YER: '\ufdfc',
    ZWD: '\u005a\u0024'
};
exports.default = CURRENCY_MAP;

//# sourceMappingURL=currency-codes.js.map


/***/ }),

/***/ "./node_modules/arui-private/lib/error-codes.js":
/*!******************************************************!*\
  !*** ./node_modules/arui-private/lib/error-codes.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var ERROR_CODES = {
    500: {
        title: 'Похоже, <nobr>что-то</nobr> пошло не&nbsp;так',
        text: 'Сервис временно недоступен, и&nbsp;мы&nbsp;уже знаем об&nbsp;этом.'
    },
    404: {
        title: 'Страница не&nbsp;найдена',
        text: 'Возможно, был введен некорректный адрес или страница была удалена.'
    }
};

exports.default = ERROR_CODES;
//# sourceMappingURL=error-codes.js.map


/***/ }),

/***/ "./node_modules/arui-private/lib/formatters.js":
/*!*****************************************************!*\
  !*** ./node_modules/arui-private/lib/formatters.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var currency_codes_1 = __importDefault(__webpack_require__(/*! ./currency-codes */ "./node_modules/arui-private/lib/currency-codes.js"));
exports.CURRENCY_MAP = currency_codes_1.default;
exports.AMOUNT_PART_SIZE = 3;
exports.CARD_NUMBER_PART_SIZE = 4;
exports.ACCOUNT_SPLIT_REGEX = /^(\d{5})(\d{3})(\d)(\d{4})(\d{7})$/;
exports.ACCOUNT_FORMAT = '$1 $2 $3 $4 $5';
exports.AMOUNT_DEFORMAT_REGEXP = / /g;
/**
 * Возвращает функцию, которая разбивает строку на части.
 *
 * @function
 * @param {Number} partSize Число символов в каждой части
 * @returns {Function}
 */
function createSplitter(partSize) {
    function parts(str) {
        if (str.length <= partSize) {
            return [str];
        }
        var from = str.length - partSize;
        var to = str.length;
        return [str.slice(from, to)].concat(parts(str.slice(0, from)));
    }
    return parts;
}
var amountSplitter = createSplitter(exports.AMOUNT_PART_SIZE);
var cardNumberSplitter = createSplitter(exports.CARD_NUMBER_PART_SIZE);
/**
 * Возвращает символ валюты.
 *
 * @function
 * @param {String} value Мнемоник код валюты
 * @returns {String}
 */
function formatCurrency(value) {
    return currency_codes_1.default[value] || value;
}
exports.formatCurrency = formatCurrency;
/**
 * Возвращает отформатированное значение числа.
 * Целая часть числа разделяется на части по 3 цифры, между целой и дробной части добавляется пробел.
 *
 * @function
 * @param {String|Number} value_ Число
 * @returns {String}
 */
function formatAmount(value_) {
    var value = "" + value_;
    var numberParts = value.split('.');
    var integerPart = numberParts[0];
    var decimalPart = numberParts[1] || '';
    if (decimalPart.length === 1) {
        decimalPart += '0';
    }
    return amountSplitter(integerPart).reverse().join(' ') + (decimalPart ? "," + decimalPart : '');
}
exports.formatAmount = formatAmount;
/**
 * Возвращает значение без пробелов.
 *
 * @function
 * @param {String|Number} value Число
 * @returns {String}
 */
function deformatAmount(value) {
    return ("" + value).replace(exports.AMOUNT_DEFORMAT_REGEXP, '');
}
exports.deformatAmount = deformatAmount;
/**
 * Возвращает отформатированное значение аккаунта.
 * Разделяет число на группы, разделяет их пробелами.
 * XXXXX XXX X XXXX XXXXXXX
 *
 * @function
 * @param {String|Number} value Номер аккаунта.
 * @returns {String}
 */
function formatAccount(value) {
    if (!value) {
        return '';
    }
    return value.toString().replace(exports.ACCOUNT_SPLIT_REGEX, exports.ACCOUNT_FORMAT);
}
exports.formatAccount = formatAccount;
/**
 * Возвращает отформатированное значение аккаунта.
 * Разделяет число на группы, часть символов заменяет точками.
 * XXXXX XXX...XXXXXX.
 *
 * @function
 * @param {String} account Номер аккаунта.
 * @returns {String}
 */
function formatAccountWithShrinking(account) {
    if (!account) {
        return '';
    }
    return account.substr(0, 5) + " " + account.substr(5, 3) + "..." + account.substr(-6);
}
exports.formatAccountWithShrinking = formatAccountWithShrinking;
/**
 * Возвращает отформатированное значение номера карты.
 *
 * @function
 * @param {String|Number} value_ Номер карты.
 * @returns {String}
 */
function formatCardNumber(value_) {
    var value = "" + value_;
    return cardNumberSplitter(value).reverse().join(' ');
}
exports.formatCardNumber = formatCardNumber;
/**
 * Склоняет слово в зависимости от количества.
 * Если в строке массива `declensions` присутствует шаблон `%n`, то он будет заменён на `number`.
 *
 * @param {String|Number} number Количество
 * @param {Array.<String>} declensions Варианты окончания - ['месяц', 'месяца', 'месяцев']
 * @returns {String}
 */
function pluralize(number, declensions) {
    var one = declensions[0], two = declensions[1], many = declensions[2];
    var parsedNumber = typeof number === 'string' ? parseInt(number, 10) : number;
    var result;
    var rest = Math.abs(parsedNumber) % 100;
    if (rest > 10 && rest < 20) {
        result = many;
    }
    else {
        rest %= 10;
        if (rest > 1 && rest < 5) {
            result = two;
        }
        else if (rest === 1) {
            result = one;
        }
        else {
            result = many;
        }
    }
    return result.replace(/%n/g, parsedNumber.toString(10));
}
exports.pluralize = pluralize;
/**
 * Маскирует номер телефона.
 *
 * @param {String} number Номер телефона
 * @returns {String}
 */
function formatMaskedPhone(number) {
    var first = number.substr(0, 2);
    var last = number.substr(number.length - 5, number.length);
    return first + " \u00B7\u00B7\u00B7 \u00B7\u00B7\u00B7 " + last;
}
exports.formatMaskedPhone = formatMaskedPhone;
/**
 * Возвращает 4 последних цифры номера карты.
 * Скармливаем 13123123123123686781 и получаем ··6781
 *
 * @param {String} number Номер телефона
 * @returns {String}
 */
function cropAccountNumber(number) {
    if (!number || number.length <= 4) {
        return number;
    }
    return "\u00B7\u00B7" + number.substring(number.length - 4, number.length);
}
exports.cropAccountNumber = cropAccountNumber;
/**
 * Форматирует номер транзакции.
 *
 * @param {String} [value] Номер транзакции.
 * @param {String} [prefix] Текст, отображаемый перед отформатированным значением.
 * @returns {String} Форматированный номер транзакции.
 */
function formatPaymentNumber(value, prefix) {
    if (!value) {
        return '';
    }
    prefix = prefix ? prefix + " " : '';
    return prefix + "\u2116" + value;
}
exports.formatPaymentNumber = formatPaymentNumber;
/**
 * Форматирует сумму и добавляет символ валюты.
 *
 * @param {Amount} [term] Данные о сумме.
 * @param {Boolean} [withCurrency] Флаг указывающий о необхомости добавить в вывод символ валюты.
 * @returns {String} Отформатированная сумма.
 */
function formatAmountWithCurrency(term, withCurrency) {
    if (withCurrency === void 0) { withCurrency = true; }
    return "" + formatAmount(term.amount / term.currency.minorUnits) + (withCurrency ? " " + formatCurrency(term.currency.mnemonicCode) : '');
}
exports.formatAmountWithCurrency = formatAmountWithCurrency;
/**
 * Формирует строку вида `минимум ...` или `максимум ...`
 *
 * @param {Amount} [min] Сумма минимума.
 * @param {Amount} [max] Сумма максимума.
 * @returns {String} Отформатированная сумма.
 */
function formatMinMax(min, max) {
    var result = '';
    if (min) {
        result = "\u043C\u0438\u043D\u0438\u043C\u0443\u043C " + formatAmountWithCurrency(min) + " ";
    }
    if (max) {
        result += "\u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C " + formatAmountWithCurrency(max);
    }
    return result;
}
exports.formatMinMax = formatMinMax;
/**
 * Перевод в проценты.
 *
 * @param {Percents} [percent] Сумма.
 * @returns {String} Строка в процентах.
 */
function formatPercents(percent) {
    return percent ? percent.value / percent.minorUnits + " %" : '0 %';
}
exports.formatPercents = formatPercents;
/**
 * Форматирование миллисекунд в mm:ss.
 *
 * @param {Number} ms миллисекунды
 * @returns {String} время в формате mm:ss, но если оно более 100 минут,
 * то строка 'более, чем 99:99'
 */
function formatMsAsMinutes(ms) {
    if (ms >= 6000000) {
        return 'более, чем 99:99';
    }
    var totalSeconds = (ms - (ms % 1000)) / 1000;
    var totalMinutes = (totalSeconds - (totalSeconds % 60)) / 60;
    var seconds = totalSeconds % 60;
    var paddedMinutes = ("00" + totalMinutes).slice(-2);
    var paddedSeconds = ("00" + seconds).slice(-2);
    return paddedMinutes + ":" + paddedSeconds;
}
exports.formatMsAsMinutes = formatMsAsMinutes;
/**
 * Форматирует traceId.
 *
 * @param {String} [id] traceId.
 * @returns {String} Форматированный traceId.
 */
function formatTraceId(id) {
    var result = [];
    id.split('').forEach(function (letter, index) {
        if (index !== 0 && index % 4 === 0) {
            result.push('-');
        }
        result.push(letter);
    });
    return result.join('');
}
exports.formatTraceId = formatTraceId;
/**
 * Форматирует значение из range-slider (c числами).
 *
 * @param {Number} [value] значение из range-slider.
 * @returns {String} форматированное значение из range-slider.
 */
function formatRangeSliderNumbers(value) {
    return value ? String(value).replace(/[^0-9]/g, '') : '';
}
exports.formatRangeSliderNumbers = formatRangeSliderNumbers;
/**
 * Форматирует значение из range-slider (c деньгами).
 *
 * @param {Number} [value] значение из range-slider.
 * @returns {String} форматированное значение из range-slider.
 */
function formatRangeSliderMoney(value) {
    return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : '';
}
exports.formatRangeSliderMoney = formatRangeSliderMoney;
/**
 * Конвертирует сумму из формата для корпоратов в формат для розницы.
 *
 * @typedef {Object} CorporateAmountProps Параметры суммы
 *
 * @param {CorporateAmountProps} amount Параметры суммы
 * @returns {AmountProps}
 */
function convertToCorporateAmount(amount) {
    return {
        value: amount.amount,
        currency: {
            code: amount.currency.mnemonicCode,
            minority: amount.currency.minorUnits
        }
    };
}
exports.convertToCorporateAmount = convertToCorporateAmount;

//# sourceMappingURL=formatters.js.map


/***/ }),

/***/ "./node_modules/arui-private/page/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arui-private/page/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

__webpack_require__(/*! ./page.css */ "./node_modules/arui-private/page/page.css");

var _page = __webpack_require__(/*! ./page */ "./node_modules/arui-private/page/page.js");

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _page2.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/arui-private/page/page.css":
/*!*************************************************!*\
  !*** ./node_modules/arui-private/page/page.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/arui-private/page/page.js":
/*!************************************************!*\
  !*** ./node_modules/arui-private/page/page.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _themeProvider = __webpack_require__(/*! arui-feather/theme-provider */ "./node_modules/arui-feather/theme-provider/index.js");

var _themeProvider2 = _interopRequireDefault(_themeProvider);

var _cn = __webpack_require__(/*! arui-feather/cn */ "./node_modules/arui-feather/cn.js");

var _cn2 = _interopRequireDefault(_cn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Компонент страницы.
 * Как правило является корневым компонентов страницы.
 * Обычно используется совместно с компонентами `Header`, `Content` и `Footer`.
 */
var Page = (_dec = (0, _cn2.default)('page'), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Page.prototype.render = function render(cn) {
        var _props = this.props,
            id = _props.id,
            headerTheme = _props.headerTheme,
            header = _props.header,
            footer = _props.footer,
            hasOffset = _props.hasOffset;


        return _react2.default.createElement(
            'div',
            { className: cn(), id: id },
            header && _react2.default.createElement(
                _themeProvider2.default,
                { theme: headerTheme },
                _react2.default.createElement(
                    'div',
                    { className: cn('header', { theme: headerTheme }) },
                    header
                )
            ),
            this.renderContent(cn),
            footer && _react2.default.createElement(
                'div',
                { className: cn('footer', { offset: hasOffset }) },
                footer
            )
        );
    };

    Page.prototype.renderContent = function renderContent(cn) {
        return _react2.default.createElement(
            'div',
            { className: cn('content', { offset: this.props.hasOffset }) },
            this.props.children
        );
    };

    return Page;
}(_react2.default.Component), _class2.defaultProps = {
    hasOffset: true,
    headerTheme: 'alfa-on-white'
}, _temp)) || _class);
Page.propTypes = undefined !== "production" ? {
    /** Дочерние элементы */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.string,
    /** Уникальный идентификатор блока */
    id: _propTypes2.default.string,
    /** Футер страницы */
    footer: _propTypes2.default.node,
    /** Шапка страницы */
    header: _propTypes2.default.node,
    /** Тема для шапки станицы */
    headerTheme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Добавить/убрать отступ слева */
    hasOffset: _propTypes2.default.bool
} : {};
exports.default = Page;
//# sourceMappingURL=page.js.map


/***/ }),

/***/ "./src/components/wrapper/index.js":
/*!*****************************************!*\
  !*** ./src/components/wrapper/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/components/wrapper/layout.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/wrapper/layout.css":
/*!*******************************************!*\
  !*** ./src/components/wrapper/layout.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/wrapper/layout.jsx":
/*!*******************************************!*\
  !*** ./src/components/wrapper/layout.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "@babel/runtime-corejs2/core-js/object/define-property");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-names */ "@babel/runtime-corejs2/core-js/object/get-own-property-names");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "@babel/runtime-corejs2/core-js/object/create");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var arui_private_error_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! arui-private/error-page */ "./node_modules/arui-private/error-page/index.js");
/* harmony import */ var arui_private_error_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(arui_private_error_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var arui_feather_theme_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! arui-feather/theme-provider */ "./node_modules/arui-feather/theme-provider/index.js");
/* harmony import */ var arui_feather_theme_provider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(arui_feather_theme_provider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.css */ "./src/components/wrapper/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_7__);





function _defaults(obj, defaults) { var keys = _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default()(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(defaults, key); if (value && value.configurable && obj[key] === undefined) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, value); } } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3___default()(superClass.prototype); subClass.prototype.constructor = subClass; _defaults(subClass, superClass); }






var Layout =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Layout, _Component);

  function Layout() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Layout.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(arui_feather_theme_provider__WEBPACK_IMPORTED_MODULE_6___default.a, {
      theme: "alfa-on-white"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(arui_private_error_page__WEBPACK_IMPORTED_MODULE_5___default.a, {
      traceId: '1489583aae003360',
      returnUrl: '#'
    }));
  };

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "@babel/runtime-corejs2/core-js/object/define-property");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-names */ "@babel/runtime-corejs2/core-js/object/get-own-property-names");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "@babel/runtime-corejs2/core-js/object/create");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/wrapper */ "./src/components/wrapper/index.js");





function _defaults(obj, defaults) { var keys = _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default()(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(defaults, key); if (value && value.configurable && obj[key] === undefined) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, value); } } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_3___default()(superClass.prototype); subClass.prototype.constructor = subClass; _defaults(subClass, superClass); }




var App =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(App, _React$Component);

  function App() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  };

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);



/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "@babel/runtime-corejs2/core-js/promise");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server */ "./src/server/server.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var currentServer = _server__WEBPACK_IMPORTED_MODULE_2__["default"];

function startServer() {
  return _startServer.apply(this, arguments);
}

function _startServer() {
  _startServer = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return currentServer.start();

          case 3:
            _context2.next = 9;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            console.error('Failed to start server', _context2.t0);
            process.exit(1);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return _startServer.apply(this, arguments);
}

startServer();

if (false) {}

/***/ }),

/***/ "./src/server/plugins/pages/template.jsx":
/*!***********************************************!*\
  !*** ./src/server/plugins/pages/template.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../index */ "./src/index.js");



var getHTMLTemplate = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
  lang: "ru"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  charSet: "utf-8"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  name: "viewport",
  content: "width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1, user-scalable=no"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  httpEquiv: "X-UA-Compatible",
  content: "IE=edge"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u043A\u0440\u0435\u0434\u0438\u0442 \u0438\u043B\u0438 \u0440\u0435\u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
/* harmony default export */ __webpack_exports__["default"] = (getHTMLTemplate);

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_pages_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/pages/template */ "./src/server/plugins/pages/template.jsx");
var Hapi = __webpack_require__(/*! @hapi/hapi */ "@hapi/hapi");


var server = Hapi.server({
  port: 3000,
  host: 'localhost'
});
server.route({
  method: 'GET',
  path: '/',
  handler: function handler(request, h) {
    return _plugins_pages_template__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});
server.ext({
  type: 'onPostStart',
  method: function method(_, done) {
    console.log("Server is running: " + server.info.uri);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/server/index ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/valery/WebstormProjects/alfaform_2.1/src/server/index */"./src/server/index.js");


/***/ }),

/***/ "@babel/runtime-corejs2/core-js/object/create":
/*!***************************************************************!*\
  !*** external "@babel/runtime-corejs2/core-js/object/create" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/create");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/object/define-property":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs2/core-js/object/define-property" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/define-property");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor":
/*!************************************************************************************!*\
  !*** external "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor" ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/object/get-own-property-names":
/*!*******************************************************************************!*\
  !*** external "@babel/runtime-corejs2/core-js/object/get-own-property-names" ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-names");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/promise":
/*!*********************************************************!*\
  !*** external "@babel/runtime-corejs2/core-js/promise" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/promise");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@hapi/hapi":
/*!*****************************!*\
  !*** external "@hapi/hapi" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/hapi");

/***/ }),

/***/ "cn-decorator":
/*!*******************************!*\
  !*** external "cn-decorator" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cn-decorator");

/***/ }),

/***/ "core-decorators/lib/autobind":
/*!***********************************************!*\
  !*** external "core-decorators/lib/autobind" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-decorators/lib/autobind");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map