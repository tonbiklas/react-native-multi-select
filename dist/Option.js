'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_Component) {
    _inherits(Option, _Component);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'textStyle',
        value: function textStyle() {
            var text = this.props.text;

            if (text) return [styles.text, text.style];

            return styles.text;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var view = _props.view;
            var touchableOpacity = _props.touchableOpacity;
            var _onPress = _props.onPress;
            var text = _props.text;

            return _react2.default.createElement(
                _reactNative.View,
                _extends({ refreshing: false }, view, { style: [styles.View, view.style] }),
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    _extends({}, touchableOpacity, {
                        style: [styles.touchableOpacity, touchableOpacity.style],
                        onPress: function onPress() {
                            _onPress(children);
                            _reactNative.DeviceEventEmitter.emit('saveFocus');
                        } }),
                    _react2.default.createElement(
                        _reactNative.Text,
                        _extends({}, text, { style: [styles.Text, text.style] }),
                        children
                    )
                )
            );
        }
    }]);

    return Option;
}(_react.Component);

exports.default = Option;


Option.defaultProps = {
    text: {},
    view: {},
    touchableOpacity: {
        onPress: function onPress() {}
    }
};

var styles = _reactNative.StyleSheet.create({
    text: {},
    view: {},
    touchableOpacity: {
        height: 40
    }
});