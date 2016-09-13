'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionList = function (_Component) {
    _inherits(OptionList, _Component);

    function OptionList() {
        _classCallCheck(this, OptionList);

        return _possibleConstructorReturn(this, (OptionList.__proto__ || Object.getPrototypeOf(OptionList)).apply(this, arguments));
    }

    _createClass(OptionList, [{
        key: 'filter',
        value: function filter(children, items, text) {
            if (!(0, _isArray2.default)(children)) children = [];

            if (items.length === 0) return items;

            return items.map(function (item, index) {
                var regulated = item.match(new RegExp(text, "i"));
                if ((0, _isArray2.default)(regulated)) return children[index];
            });
        }
    }, {
        key: 'mapThroughOptions',
        value: function mapThroughOptions(items) {
            return items.map(function (item, index) {
                return _react2.default.createElement(
                    _reactNative.Text,
                    { key: index },
                    item
                );
            });
        }
    }, {
        key: 'mayHide',
        value: function mayHide() {
            return this.props.display ? {} : { height: 0 };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var text = _props.text;
            var items = _props.items;
            var view = _props.view;
            var scrollView = _props.scrollView;


            return _react2.default.createElement(
                _reactNative.View,
                _extends({}, view, { style: [styles.view, view.style, this.mayHide()] }),
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    _extends({}, scrollView, { style: [styles.scrollView, scrollView.style],
                        keyboardShouldPersistTaps: true }),
                    text.length > 0 ? this.filter(children, items, text) : children
                )
            );
        }
    }]);

    return OptionList;
}(_react.Component);

OptionList.propTypes = {
    items: _react.PropTypes.array,
    display: _react.PropTypes.bool,
    view: _react.PropTypes.object,
    scrollView: _react.PropTypes.object
};
exports.default = OptionList;


OptionList.defaultProps = {
    view: {},
    scrollView: {},
    display: false
};

var styles = _reactNative.StyleSheet.create({
    view: {},
    scrollView: {
        backgroundColor: '#6A85B1',
        height: 300
    }
});