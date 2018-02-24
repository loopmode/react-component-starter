'use strict';

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-15');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyComponent = require('../MyComponent');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('A suite', function () {
    it('should render without throwing an error', function () {
        expect((0, _enzyme.shallow)(_react2.default.createElement(_MyComponent2.default, null)).contains(_react2.default.createElement(
            'h3',
            null,
            'My Component'
        ))).toBe(true);
    });

    it('should be selectable by class "MyComponent"', function () {
        expect((0, _enzyme.shallow)(_react2.default.createElement(_MyComponent2.default, null)).is('.MyComponent')).toBe(true);
    });

    it('should mount in a full DOM', function () {
        expect((0, _enzyme.mount)(_react2.default.createElement(_MyComponent2.default, null)).find('.MyComponent').length).toBe(1);
    });
});