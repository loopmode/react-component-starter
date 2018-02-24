import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';

import MyComponent from '../MyComponent';

describe('A suite', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<MyComponent />).contains(<h3>My Component</h3>)).toBe(true);
    });

    it('should be selectable by class "MyComponent"', function() {
        expect(shallow(<MyComponent />).is('.MyComponent')).toBe(true);
    });

    it('should mount in a full DOM', function() {
        expect(mount(<MyComponent />).find('.MyComponent').length).toBe(1);
    });
});
