import React from 'react';
import Dashboard from '../../components/Dashboard';
import { shallow } from 'enzyme';

test('should load dashboard page' , () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
});