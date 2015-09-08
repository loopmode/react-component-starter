'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentComponent = require('./Component/Component');

var _ComponentComponent2 = _interopRequireDefault(_ComponentComponent);

var element = document.createElement('div');
_react2['default'].render(_react2['default'].createElement(_ComponentComponent2['default'], null), element);
document.body.appendChild(element);