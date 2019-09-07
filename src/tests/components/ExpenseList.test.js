import React from 'react';
import {ExpenseList} from '../../components/ExpenseList';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should load expense list' , () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should load expense list with empty array' , () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});